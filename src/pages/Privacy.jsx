import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { company } from "../data/siteData";

export default function Privacy() {
  return (
    <div className="page privacy">
      <PageHero
        breadcrumb="プライバシーポリシー"
        eyebrow="PRIVACY POLICY"
        title="プライバシーポリシー"
        desc="お客様の個人情報保護に関する方針をご説明いたします。"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="privacy-content">
            <p className="privacy-updated">最終更新日：2026年9月1日</p>

            <p>
              ブルーオーシャンスター株式会社（以下、「当社」）は、当社が提供するサービス（通関業務、国際物流、物流DXプラットフォーム等）において、お客様の個人情報を適切に取り扱い、保護するために以下のプライバシーポリシーを定めます。
            </p>

            <h2>1. 個人情報の収集</h2>
            <p>当社は、以下の情報を収集する場合があります。</p>
            <ul>
              <li>お問い合わせ・お見積りフォーム：氏名、会社名、メールアドレス、電話番号、お問い合わせ内容</li>
              <li>サービス利用時：通関申告に必要な貨物情報、輸出入先情報、関連書類の内容</li>
              <li>ウェブサイト利用時：アクセスログ、Cookie、IPアドレス、ブラウザ情報</li>
            </ul>

            <h2>2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用します。</p>
            <ul>
              <li>お問い合わせへの回答・見積りの提供</li>
              <li>通関業務・国際物流サービスの遂行</li>
              <li>法令に基づく税関への届出・申告</li>
              <li>サービスの改善・新サービスの開発</li>
              <li>重要なお知らせ・キャンペーン等のご案内（ご同意いただいた方のみ）</li>
            </ul>

            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供しません。ただし、以下の場合は除きます。
            </p>
            <ul>
              <li>法令に基づき開示が求められた場合</li>
              <li>人の生命、身体または財産の保護に必要な場合</li>
              <li>通関業務の遂行に必要な範囲で、税関、検疫所、運送業者等に開示する場合</li>
              <li>業務委託先との間で、守秘義務の下に開示する場合</li>
            </ul>

            <h2>4. 個人情報の管理</h2>
            <p>
              当社は、個人情報の正確性および安全性を確保するために、セキュリティ対策を講じ、個人情報への不正アクセス、紛失、破損、改ざん、漏洩を防止いたします。
            </p>

            <h2>5. Cookie の使用</h2>
            <p>
              当社ウェブサイトでは、サービスの品質向上のためにCookieを使用しています。Cookieはお客様のブラウザに保存される小さなデータであり、お客様を個人的に識別するものではありません。ブラウザの設定によりCookieを無効にすることができます。
            </p>

            <h2>6. お問い合わせ窓口</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
            <div className="privacy-contact">
              <p><strong>{company.name}</strong></p>
              <p>メール：{company.email}</p>
              <p>電話：{company.tel}</p>
              <p>所在地：{company.address}</p>
            </div>

            <h2>7. プライバシーポリシーの変更</h2>
            <p>
              当社は、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じます。重要な変更がある場合は、ウェブサイト上でお知らせいたします。
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
