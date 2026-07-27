import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <div className="eyebrow">GET STARTED</div>
          <h2>まずは相談する（無料）</h2>
          <p>輸出入通関・国際物流に関するお悩みは、まずお気軽にご相談ください。専門スタッフが最適なプランをご提案します。</p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn-primary">
            無料お見積りを依頼する
          </Link>
          <Link to="/services" className="btn btn-outline">
            サービス詳細を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
