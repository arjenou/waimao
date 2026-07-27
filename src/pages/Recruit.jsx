import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Icon from "../components/Icon";
import { jobs } from "../data/siteData";

const perks = [
  { title: "資格取得支援", desc: "通関士など業務関連資格の取得費用をサポートします。" },
  { title: "フレックス・リモート", desc: "職種に応じてフレックスタイム・リモートワークを導入しています。" },
  { title: "語学力を活かせる", desc: "中国語・英語など語学力を活かして活躍できる環境です。" },
  { title: "急成長中の環境", desc: "物流DX事業の拡大に伴い、裁量を持って挑戦できるポジションが多数。" },
];

export default function Recruit() {
  return (
    <div className="page recruit">
      <PageHero
        breadcrumb="採用情報"
        eyebrow="CAREERS"
        title="採用情報"
        desc="日本と世界をつなぐ貿易実務を、共に創る仲間を募集しています。"
      />

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">WORK WITH US</div>
            <h2>ブルーオーシャンスターで働く魅力</h2>
          </div>
          <div className="grid grid-4">
            {perks.map((p) => (
              <div className="perk-card card" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">OPEN POSITIONS</div>
            <h2>募集要項</h2>
          </div>

          <div className="job-list">
            {jobs.map((job) => (
              <div className="job-card card" key={job.title}>
                <div className="job-card__head">
                  <h3>{job.title}</h3>
                  <span className="tag">{job.type}</span>
                </div>
                <p className="job-card__location">
                  <Icon name="pin" size={16} /> {job.location}
                </p>
                <p>{job.desc}</p>
                <Link to="/contact" className="btn btn-ghost btn-sm">
                  応募・問い合わせる
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container recruit-cta card">
          <div>
            <h2>まずはカジュアル面談から</h2>
            <p>募集職種以外でも、ご興味があればお気軽にお問い合わせください。</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            エントリー・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
