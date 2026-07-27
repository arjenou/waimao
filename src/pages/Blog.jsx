import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { blogPosts } from "../data/siteData";

export default function Blog() {
  const categories = useMemo(
    () => ["すべて", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );
  const [category, setCategory] = useState("すべて");

  const filtered = blogPosts.filter((p) => category === "すべて" || p.category === category);

  return (
    <div className="page blog">
      <PageHero
        breadcrumb="お役立ち情報"
        eyebrow="COLUMN & NEWS"
        title="お役立ち情報"
        desc="HSコード・通関規制・貿易実務に関するコラムをお届けします。"
      />

      <section className="section">
        <div className="container">
          <div className="blog-filter">
            <Icon name="filter" size={18} />
            {categories.map((c) => (
              <button
                key={c}
                className={`blog-filter__btn ${category === c ? "is-active" : ""}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {filtered.map((post) => (
              <article className="blog-card card" key={post.id}>
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
                  <span className="service-card__link">
                    続きを読む <Icon name="arrow" size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && <p className="blog-empty">該当する記事は見つかりませんでした。</p>}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
