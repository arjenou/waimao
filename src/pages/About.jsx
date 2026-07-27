import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { company, history, images } from "../data/siteData";

export default function About() {
  return (
    <div className="page about">
      <PageHero
        breadcrumb="会社概要"
        eyebrow="ABOUT US"
        title="会社概要"
        desc="日本と世界をつなぐ通関・物流のプロフェッショナルとして、お客様の貿易実務を支えます。"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2 about-intro">
            <div className="card about-table">
              <h3>会社情報</h3>
              <table>
                <tbody>
                  <tr>
                    <th>社名</th>
                    <td>{company.name}</td>
                  </tr>
                  <tr>
                    <th>設立</th>
                    <td>{company.established}</td>
                  </tr>
                  <tr>
                    <th>代表取締役</th>
                    <td>{company.ceoName}</td>
                  </tr>
                  <tr>
                    <th>資本金</th>
                    <td>{company.capital}</td>
                  </tr>
                  <tr>
                    <th>本社</th>
                    <td>{company.headOffice}</td>
                  </tr>
                  <tr>
                    <th>営業所</th>
                    <td>{company.salesOffice}</td>
                  </tr>
                  <tr>
                    <th>海外拠点</th>
                    <td>{company.overseasOffice}</td>
                  </tr>
                  <tr>
                    <th>取引銀行</th>
                    <td>{company.bank}</td>
                  </tr>
                  <tr>
                    <th>許認可</th>
                    <td>{company.license}</td>
                  </tr>
                  <tr>
                    <th>事業内容</th>
                    <td>
                      <ul className="about-table__list">
                        {company.businessList.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>TEL</th>
                    <td>{company.tel}</td>
                  </tr>
                  <tr>
                    <th>E-mail</th>
                    <td>{company.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="greeting card">
              <div className="greeting__body">
                <Icon name="quote" size={30} className="greeting__icon" />
                <div className="eyebrow">ご挨拶</div>
                <h3>お客様の成功を、共に築くパートナーとして</h3>
                <p>
                  ブルーオーシャンスターは、2024年2月に通関業許可を取得して、国際物流サービスの分野において、
                  お客様のニーズに合った包括的で信頼性のあるソリューションを提供し、お客様の貨物を効率的かつ安全に運び、
                  供給チェーン全体を最適化することに専念しています。
                </p>
                <p>
                  当社のチームは経験豊富で専門的な知識を持ち、効率的なプロセスを組み合わせ迅速でコスト効果の高いサービスを提供し、
                  国内および国際輸送、倉庫管理、通関手続およびアドバイスに加えて、お客様の個別の要件に合わせてカスタマイズもできます。
                </p>
                <p>
                  私たちは、お客様の成功を共に築くこととお客様のビジネスに貢献できることを誇りに思っています。
                  どうぞお気軽にお問い合わせください。
                </p>
                <p className="greeting__sign">{company.ceo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">HISTORY</div>
            <h2>沿革</h2>
          </div>
          <div className="timeline">
            {history.map((h) => (
              <div className="timeline__item" key={h.year}>
                <div className="timeline__year">{h.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{h.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">ACCESS</div>
            <h2>アクセス・拠点情報</h2>
            <p>東京本社を拠点に、大阪営業所・海外拠点（中国・鄭州）を展開しています。</p>
          </div>
          <div className="access-map card">
            <div className="access-map__frame">
              <img src={images.aboutOffice} alt="本社オフィス外観" />
              <div className="access-map__frame-caption">
                <Icon name="pin" size={18} />
                本社（地図はお問い合わせ時にご案内いたします）
              </div>
            </div>
            <div className="access-map__info">
              <div>
                <Icon name="pin" size={18} /> 本社：{company.headOffice}
              </div>
              <div>
                <Icon name="pin" size={18} /> 営業所：{company.salesOffice}
              </div>
              <div>
                <Icon name="pin" size={18} /> 海外拠点：{company.overseasOffice}
              </div>
              <div>
                <Icon name="ship" size={18} /> 東京メトロ日比谷線・都営浅草線「小伝馬町駅」より徒歩5分
              </div>
              <div>
                <Icon name="phone" size={18} /> {company.tel}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
