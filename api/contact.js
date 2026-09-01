import tls from "tls";
import { connect } from "net";

const SMTP_HOST = process.env.SMTP_HOST || "sv12510.xserver.jp";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER || "info@blueoceanstar.co.jp";
const SMTP_PASS = process.env.SMTP_PASSWORD || "";
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "info@blueoceanstar.co.jp";

/* ── Raw SMTP client (net + STARTTLS) ───────────────────── */

function smtpSend({ from, to, subject, htmlBody }) {
  return new Promise((resolve, reject) => {
    let socket = connect(SMTP_PORT, SMTP_HOST);
    let buffer = "";
    let step = 0;
    let authed = false;

    const timer = setTimeout(() => { socket.destroy(); reject(new Error("SMTP timeout")); }, 30000);

    const send = (line) => socket.write(line + "\r\n");

    function onData(data) {
      buffer += data.toString();
      const lines = buffer.split("\r\n");
      buffer = lines.pop();
      for (const line of lines) {
        if (!line) continue;
        const code = parseInt(line.substring(0, 3), 10);
        route(code, line);
      }
    }

    function route(code, line) {
      switch (step) {
        case 0: // greeting
          if (code === 220) { send(`EHLO ${SMTP_HOST}`); step = 1; }
          break;
        case 1: // EHLO
          if (code === 250 && line.includes("STARTTLS")) { send("STARTTLS"); step = 2; }
          else if (code === 250) { doAuth(); }
          break;
        case 2: // STARTTLS
          if (code === 220) {
            const tlsSock = tls.connect({ socket, servername: SMTP_HOST, rejectUnauthorized: false });
            socket.removeAllListeners();
            socket = tlsSock;
            tlsSock.on("data", onData);
            tlsSock.on("error", (e) => { clearTimeout(timer); reject(e); });
            send(`EHLO ${SMTP_HOST}`); step = 3;
          }
          break;
        case 3: // EHLO after TLS
          if (code === 250) doAuth();
          break;
        case 4: // AUTH username
          if (code === 334) { send(Buffer.from(SMTP_USER).toString("base64")); step = 5; }
          break;
        case 5: // AUTH password
          if (code === 334) { send(Buffer.from(SMTP_PASS).toString("base64")); step = 6; }
          break;
        case 6: // auth result
          if (code === 235) { authed = true; send(`MAIL FROM:<${from}>`); step = 7; }
          else { clearTimeout(timer); reject(new Error(`AUTH failed: ${line}`)); }
          break;
        case 7: // MAIL FROM
          if (code === 250) { send(`RCPT TO:<${to}>`); step = 8; }
          break;
        case 8: // RCPT TO
          if (code === 250) { send("DATA"); step = 9; }
          break;
        case 9: // DATA
          if (code === 354) {
            const hdr = [`From: ${from}`, `To: ${to}`, `Subject: ${subject}`, "MIME-Version: 1.0", "Content-Type: text/html; charset=UTF-8", "", ""].join("\r\n");
            send(hdr + htmlBody.replace(/\n/g, "\r\n") + "\r\n.");
            step = 10;
          }
          break;
        case 10: // sent
          if (code === 250) { send("QUIT"); step = 11; }
          break;
        case 11:
          clearTimeout(timer); socket.destroy(); resolve();
          break;
      }
    }

    function doAuth() {
      send("AUTH LOGIN"); step = 4;
    }

    socket.on("data", onData);
    socket.on("error", (e) => { clearTimeout(timer); reject(e); });
    socket.setTimeout(30000, () => { socket.destroy(); clearTimeout(timer); reject(new Error("SMTP connection timeout")); });
  });
}

/* ── Email builders ─────────────────────────────────────── */

function buildSubject(data) {
  if (data.tab === "corporate") return `【法人お見積り】${data.company || data.name || ""}様より`;
  if (data.tab === "personal") return `【個人お見積り】${data.name || ""}様より`;
  return `【お問い合わせ】${data.subject || data.name || ""}様より`;
}

function notificationHtml(data) {
  const rows = Object.entries(data)
    .filter(([k]) => k !== "email" && k !== "tab")
    .map(([k, v], i) => `<tr${i % 2 ? ' style="background:#f6f9fc;"' : ""}><td style="padding:8px 16px;font-weight:600;color:#5b6b80;white-space:nowrap;">${k}</td><td style="padding:8px 16px;">${v || "-"}</td></tr>`)
    .join("");
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#16263b;"><div style="max-width:600px;margin:0 auto;padding:32px;">
<h2 style="color:#08213f;border-bottom:2px solid #00c2d8;padding-bottom:12px;">📬 新しいお問い合わせ</h2>
<p style="color:#5b6b80;">ウェブサイトのお問い合わせフォームから新規受信しました。</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0;border:1px solid #e2e8f0;">${rows}</table>
<p style="color:#5b6b80;font-size:13px;">— Blue Ocean Star 自動通知メール</p></div></body></html>`;
}

function receiptHtml(data) {
  const content = data.message || data.content || data.inquiry || "-";
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#16263b;"><div style="max-width:600px;margin:0 auto;padding:32px;">
<h2 style="color:#08213f;border-bottom:2px solid #00c2d8;padding-bottom:12px;">✅ お問い合わせを受け付けました</h2>
<p>${data.name || "お客様"} 様</p>
<p>お問い合わせいただきありがとうございます。以下の内容で承りました。</p>
<div style="background:#f6f9fc;border-radius:8px;padding:20px;margin:20px 0;">
<p style="margin:0;color:#5b6b80;font-size:13px;">お問い合わせ内容</p>
<p style="margin:8px 0 0;">${content}</p></div>
<p style="color:#5b6b80;">担当者より24時間以内（営業日）にご連絡いたします。</p>
<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
<p style="color:#5b6b80;font-size:13px;">ブルーオーシャンスター株式会社<br/>TEL: 03-6231-0453<br/>Email: ${COMPANY_EMAIL}</p>
</div></body></html>`;
}

/* ── Vercel Serverless Function handler ─────────────────── */

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const data = req.body;
  if (!data?.email || !data?.name) {
    res.status(400).json({ error: "name and email are required" });
    return;
  }

  try {
    // 1. Notification → company
    await smtpSend({
      from: COMPANY_EMAIL,
      to: COMPANY_EMAIL,
      subject: buildSubject(data),
      htmlBody: notificationHtml(data),
    });

    // 2. Receipt → user
    await smtpSend({
      from: COMPANY_EMAIL,
      to: data.email,
      subject: "【ブルーオーシャンスター】お問い合わせを受け付けました",
      htmlBody: receiptHtml(data),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: err.message });
  }
}
