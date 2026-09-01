import { useState } from "react";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { company } from "../data/siteData";

const API_URL = import.meta.env.VITE_API_URL || "";  // Vercel: /api/contact; local: http://localhost:3001

const TABS = [
  { id: "corporate", label: "法人向けお見積り" },
  { id: "personal", label: "個人向けお見積り" },
  { id: "general", label: "一般お問い合わせ" },
];

function Field({ label, required, children }) {
  return (
    <label className="form-field">
      <span className="form-field__label">
        {label}
        {required && <span className="form-field__required">必須</span>}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [tab, setTab] = useState("corporate");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const formData = new FormData(e.target);
    const data = { tab };
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    // Use email as name fallback for receipt
    if (!data.name && data.email) {
      data.name = data.email;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "送信に失敗しました");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err.message || "送信に失敗しました。しばらくしてからもう一度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page contact">
      <PageHero
        breadcrumb="お問い合わせ"
        eyebrow="CONTACT"
        title="お問い合わせ・お見積り"
        desc="輸出入通関・国際物流に関するご相談・お見積りは、以下のフォームよりお気軽にお送りください。24時間以内（営業日）に担当者よりご連絡いたします。"
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrap">
              <div className="contact-tabs">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    className={`contact-tab ${tab === t.id ? "is-active" : ""}`}
                    onClick={() => {
                      setTab(t.id);
                      setSubmitted(false);
                      setError("");
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="card contact-card">
                {submitted ? (
                  <div className="contact-success">
                    <Icon name="check" size={40} />
                    <h3>お問い合わせを受け付けました</h3>
                    <p>
                      ご入力いただいたメールアドレス宛に確認メールをお送りしました。
                      担当者より24時間以内（営業日）にご連絡いたします。
                    </p>
                    <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>
                      別のお問い合わせを送る
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} key={tab}>
                    {error && (
                      <div className="contact-error" style={{ padding: "12px 16px", marginBottom: 16, background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: 8, color: "#cc0000" }}>
                        {error}
                      </div>
                    )}

                    {tab === "corporate" && <CorporateForm />}
                    {tab === "personal" && <PersonalForm />}
                    {tab === "general" && <GeneralForm />}

                    <p className="form-note">
                      このサイトはreCAPTCHAによって保護されており、Googleの
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> プライバシーポリシー</a>
                      および
                      <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer"> 利用規約</a>
                      が適用されます。
                    </p>
                    <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
                      {sending ? "送信中..." : "送信する"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <aside className="contact-side">
              <div className="card contact-side__card">
                <h3>お電話でのお問い合わせ</h3>
                <p className="contact-side__phone">
                  <Icon name="phone" size={20} /> {company.tel}
                </p>
                <p>受付時間：平日 9:00〜18:00</p>
              </div>
              <div className="card contact-side__card">
                <h3>メールでのお問い合わせ</h3>
                <p className="contact-side__phone">
                  <Icon name="mail" size={20} /> {company.email}
                </p>
              </div>
              <div className="card contact-side__card">
                <h3>本社所在地</h3>
                <p>
                  <Icon name="pin" size={20} /> {company.address}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function CorporateForm() {
  return (
    <div className="form-grid">
      <Field label="会社名" required>
        <input name="company" type="text" required placeholder="株式会社サンプル" />
      </Field>
      <Field label="ご担当者名" required>
        <input name="name" type="text" required placeholder="山田 太郎" />
      </Field>
      <Field label="メールアドレス" required>
        <input name="email" type="email" required placeholder="info@example.com" />
      </Field>
      <Field label="電話番号" required>
        <input name="tel" type="tel" required placeholder="03-0000-0000" />
      </Field>
      <Field label="輸出入の別" required>
        <select name="direction" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option value="輸出">輸出</option>
          <option value="輸入">輸入</option>
          <option value="輸出・輸入 両方">輸出・輸入 両方</option>
        </select>
      </Field>
      <Field label="品目名" required>
        <input name="item" type="text" required placeholder="例：冷凍食品、電子部品 など" />
      </Field>
      <Field label="HSコード（任意）">
        <input name="hsCode" type="text" placeholder="わかる場合のみご入力ください" />
      </Field>
      <Field label="出発地" required>
        <input name="origin" type="text" required placeholder="例：上海港" />
      </Field>
      <Field label="目的地" required>
        <input name="destination" type="text" required placeholder="例：東京港" />
      </Field>
      <Field label="貨物重量 / CBM（任意）">
        <input name="weight" type="text" placeholder="例：500kg / 2.5CBM" />
      </Field>
      <Field label="ご要望" required>
        <textarea name="message" required rows={5} placeholder="ご相談内容・ご要望をご記入ください" />
      </Field>
    </div>
  );
}

function PersonalForm() {
  return (
    <div className="form-grid">
      <Field label="氏名" required>
        <input name="name" type="text" required placeholder="山田 花子" />
      </Field>
      <Field label="メールアドレス" required>
        <input name="email" type="email" required placeholder="info@example.com" />
      </Field>
      <Field label="電話番号" required>
        <input name="tel" type="tel" required placeholder="090-0000-0000" />
      </Field>
      <Field label="品目名" required>
        <input name="item" type="text" required placeholder="例：化粧品、雑貨 など" />
      </Field>
      <Field label="購入先国" required>
        <input name="country" type="text" required placeholder="例：中国" />
      </Field>
      <Field label="貨物概要" required>
        <textarea name="cargo" required rows={3} placeholder="数量・サイズなど、わかる範囲でご記入ください" />
      </Field>
      <Field label="ご質問" required>
        <textarea name="message" required rows={4} placeholder="ご質問・ご相談内容をご記入ください" />
      </Field>
    </div>
  );
}

function GeneralForm() {
  return (
    <div className="form-grid">
      <Field label="氏名" required>
        <input name="name" type="text" required placeholder="山田 太郎" />
      </Field>
      <Field label="メールアドレス" required>
        <input name="email" type="email" required placeholder="info@example.com" />
      </Field>
      <Field label="件名" required>
        <input name="subject" type="text" required placeholder="お問い合わせの件名" />
      </Field>
      <Field label="お問い合わせ内容" required>
        <textarea name="message" required rows={6} placeholder="お問い合わせ内容をご記入ください" />
      </Field>
    </div>
  );
}
