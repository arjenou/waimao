import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { goodsCategories } from "../data/siteData";

export default function GoodsItem() {
  const { id } = useParams();
  const item = goodsCategories.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="page">
        <PageHero
          breadcrumb="商品別対応ガイド"
          eyebrow="GOODS GUIDE"
          title="商品別対応ガイド"
          desc="商品カテゴリごとの輸出入ポイントを解説。"
        />
        <section className="section">
          <div className="container">
            <p>カテゴリが見つかりませんでした。</p>
            <Link to="/goods" className="btn btn-primary" style={{ marginTop: 24 }}>
              <Icon name="arrow" size={16} /> 商品別対応ガイドへ戻る
            </Link>
          </div>
        </section>
        <CtaBanner />
      </div>
    );
  }

  return (
    <div className="page goods-item">
      <PageHero
        breadcrumb="商品別対応ガイド"
        eyebrow={item.en}
        title={item.title}
        desc={item.desc}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="goods-item__content">
            <div className="goods-item__placeholder">
              <Icon name="info" size={24} />
              <h3>このページは準備中です</h3>
              <p>ただいま執筆中です。公開までお待ちください。</p>
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link to="/goods" className="btn btn-primary">
              <Icon name="arrow" size={16} /> 商品別対応ガイドへ戻る
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
