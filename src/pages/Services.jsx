import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { servicesDetail } from "../data/siteData";

export default function Services() {
  return (
    <div className="page services">
      <PageHero
        breadcrumb="サービス一覧"
        eyebrow="OUR SERVICES"
        title="サービス一覧"
        desc="輸出入通関業務・国際物流コンサルティング・スマート物流の3領域で、貿易実務をワンストップサポートします。"
      />

      <section className="section">
        <div className="container service-detail-list">
          {servicesDetail.map((s, i) => (
            <div className={`service-detail card ${i % 2 === 1 ? "is-reverse" : ""}`} id={s.id} key={s.id}>
              <div className="service-detail__visual">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="service-detail__body">
                <span className="tag">{s.tag}</span>
                <h2>{s.title}</h2>
                <p className="service-detail__lead">{s.lead}</p>
                <p>{s.body}</p>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
