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
          <div className="greeting card" style={{ marginBottom: 32 }}>
            <div className="greeting__body">
              <Icon name="quote" size={30} className="greeting__icon" />
              <div className="eyebrow">私たちの想い</div>
              <h3>人と企業の挑戦を支え、より良い未来へつなぐ。</h3>
              <p>
                私たちは、国際物流と通関サービスを通じて、お客様の事業に寄り添い、成長の歩みを共にする存在でありたいと考えています。目の前の業務を確実に遂行するだけでなく、その先にある事業の発展を見据え、社会に必要とされる価値を生み出していきます。
              </p>
              <p>
                同時に、社員一人ひとりが自分らしく働き、能力を十分に発揮できる環境づくりも、私たちの大切な使命です。特に女性が働き続けやすく、家庭やライフステージの変化にかかわらず、挑戦と成長を続けられる会社を目指しています。
              </p>
              <p>
                立場や固定観念にとらわれず、自由でオープンな姿勢を大切にすること。互いの違いを尊重し、誰かの可能性を引き出し、挑戦を後押しできる場をつくること。
              </p>
              <p>
                お客様、社員、パートナー企業と共に成長し、関わるすべての人の未来に貢献できる企業であり続けます。
              </p>
              <p className="greeting__sign">ブルーオーシャンスター株式会社<br />チーム一同</p>
            </div>
          </div>

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
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">HISTORY</div>
            <h2>企業沿革</h2>
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
                <Icon name="pin" size={18} /> 大阪事務所：{company.salesOffice}
              </div>
              <div style={{ paddingLeft: 32 }}>
                <Icon name="phone" size={16} /> T : {company.tel} / F : 047-413-6111
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
