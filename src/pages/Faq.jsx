import { useState } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { faqs } from "../data/siteData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page faq">
      <PageHero
        breadcrumb="よくあるご質問"
        eyebrow="FAQ"
        title="よくあるご質問"
        desc="お客様からよくいただくご質問をまとめました。こちらで解決しない場合はお気軽にお問い合わせください。"
      />

      <section className="section">
        <div className="container">
          <div className="accordion">
            {faqs.map((item, i) => (
              <div className={`accordion__item ${openIndex === i ? "is-open" : ""}`} key={item.q}>
                <button
                  className="accordion__question"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="accordion__q-mark">Q</span>
                  <span>{item.q}</span>
                  <Icon name="chevron" size={20} className="accordion__chevron" />
                </button>
                <div className="accordion__answer">
                  <div className="accordion__answer-inner">
                    <span className="accordion__a-mark">A</span>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
