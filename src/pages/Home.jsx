import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import CtaBanner from "../components/CtaBanner";
import { stats, homeServices, blogPosts, images } from "../data/siteData";

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <img src={images.heroPort} alt="" className="hero__bg-img" />
          <div className="hero__bg-overlay" />
          <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
            <path
              className="hero__wave hero__wave--1"
              d="M0 560c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0v240H0z"
            />
            <path
              className="hero__wave hero__wave--2"
              d="M0 620c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v180H0z"
            />
            <path
              className="hero__wave hero__wave--3"
              d="M0 680c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v120H0z"
            />
          </svg>
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="eyebrow">CUSTOMS × LOGISTICS × TECHNOLOGY</div>
            <h1>
              日本と世界をつなぐ、
              <br />
              次世代の通関プラットフォーム。
            </h1>
            <p className="hero__sub">
              輸出入通関代行から国際物流コンサルティング、独自ITプラットフォームによる貿易DXまで。
              IT化・自動化を強みに、複雑な貿易実務をシンプルにします。
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                無料お見積りを依頼する
                <Icon name="arrow" size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">OUR SERVICES</div>
            <h2>ワンストップで貿易実務をサポート</h2>
            <p>通関・物流・ITの3つの力を組み合わせ、輸出入業務のあらゆる課題を解決します。</p>
          </div>

          <div className="grid grid-3 service-grid">
            {homeServices.map((s) => (
              <div className="service-card card" key={s.title}>
                <div className="service-card__photo">
                  <img src={s.image} alt="" />
                </div>
                <div className="service-card__icon">
                  <Icon name={s.icon} size={22} />
                </div>
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to="/services" className="service-card__link">
                    詳しく見る <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark why-us">
        <div className="container">
          <div className="grid grid-2 why-us__grid">
            <div>
              <div className="eyebrow">WHY BLUE OCEAN STAR</div>
              <h2>選ばれる3つの理由</h2>
              <p style={{ marginTop: 14 }}>
                国内輸出入事業者様、中国・アジア圏の輸入バイヤー様、越境ECをご利用の個人事業主様まで。
                幅広いお客様に、信頼とスピードのある通関・物流サービスを提供しています。
              </p>
            </div>
            <div className="why-us__list">
              <div className="why-us__item">
                <span className="why-us__num">01</span>
                <div>
                  <h4>複雑品目にも対応する専門知識</h4>
                  <p>食品・動植物・機械類など、許認可が必要な品目も自社の通関士・専門スタッフが対応します。</p>
                </div>
              </div>
              <div className="why-us__item">
                <span className="why-us__num">02</span>
                <div>
                  <h4>ITプラットフォームによる見える化</h4>
                  <p>通関・物流の進捗をリアルタイムで確認できる自社開発システムで、安心のスピード対応を実現。</p>
                </div>
              </div>
              <div className="why-us__item">
                <span className="why-us__num">03</span>
                <div>
                  <h4>日本語・中国語のバイリンガル対応</h4>
                  <p>中国・アジア圏のお客様にも安心してご利用いただける、多言語でのコミュニケーション体制。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="eyebrow">NEWS & COLUMN</div>
              <h2>最新お知らせ・お役立ち情報</h2>
            </div>
            <Link to="/blog" className="btn btn-ghost btn-sm">
              記事一覧を見る
            </Link>
          </div>

          <div className="grid grid-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to="/blog" className="blog-card card" key={post.id}>
                <div className="blog-card__thumb">
                  <img src={post.image} alt="" />
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="tag">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
