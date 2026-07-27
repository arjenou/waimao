import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, desc, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="breadcrumb">
          <Link to="/">TOP</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </div>
    </section>
  );
}
