import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { goodsCategories } from "../data/siteData";

export default function Goods() {
  const [active, setActive] = useState(goodsCategories[0].id);
  const current = goodsCategories.find((c) => c.id === active);

  return (
    <div className="page goods">
      <PageHero
        breadcrumb="商品別対応ガイド"
        eyebrow="GOODS GUIDE"
        title="商品別対応ガイド"
        desc="商品カテゴリごとの輸出入ポイントを解説。取扱実績豊富なカテゴリから、はじめての方にも分かりやすくご案内します。"
      />

      <section className="section">
        <div className="container">
          <div className="goods-tabs">
            {goodsCategories.map((c) => (
              <button
                key={c.id}
                className={`goods-tab ${active === c.id ? "is-active" : ""}`}
                onClick={() => setActive(c.id)}
              >
                <span className="goods-tab__en">{c.en}</span>
                <span>{c.title}</span>
              </button>
            ))}
          </div>

          <div className="goods-panel card">
            <div className="goods-panel__photo">
              <img src={current.image} alt={current.title} />
            </div>
            <div className="goods-panel__content">
              <div className="goods-panel__head">
                <span className="tag">{current.en}</span>
                <h2>{current.title}</h2>
                <p>{current.desc}</p>
              </div>
              <div className="goods-panel__tips">
                <h4>対応・確認ポイント</h4>
                <ul className="check-list">
                  {current.tips.map((tip) => (
                    <li key={tip}>
                      <Icon name="check" size={16} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn btn-primary">
                「{current.title}」の輸出入について相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">ALL CATEGORIES</div>
            <h2>取扱カテゴリ一覧</h2>
          </div>
          <div className="grid grid-3">
            {goodsCategories.map((c) => (
              <Link to={`/goods/${c.id}`} className="goods-card card" key={c.id}>
                <div className="goods-card__photo">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="goods-card__body">
                  <span className="tag">{c.en}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
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
