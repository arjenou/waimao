import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Icon from "../components/Icon";
import { blogPosts } from "../data/siteData";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="page">
        <PageHero
          breadcrumb="お役立ち情報"
          eyebrow="COLUMN & NEWS"
          title="お役立ち情報"
          desc="HSコード・通関規制・貿易実務に関するコラムをお届けします。"
        />
        <section className="section">
          <div className="container">
            <p>記事が見つかりませんでした。</p>
            <Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>
              <Icon name="arrow" size={16} /> お役立ち情報一覧へ戻る
            </Link>
          </div>
        </section>
        <CtaBanner />
      </div>
    );
  }

  return (
    <div className="page blog-post">
      <PageHero
        breadcrumb="お役立ち情報"
        eyebrow={post.category}
        title={post.title}
        desc={post.date}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="blog-post__content">
            <div className="blog-post__placeholder">
              <Icon name="info" size={24} />
              <h3>この記事は準備中です</h3>
              <p>ただいま執筆中です。公開までお待ちください。</p>
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link to="/blog" className="btn btn-primary">
              <Icon name="arrow" size={16} /> お役立ち情報一覧へ戻る
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
