import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>ページが見つかりませんでした</h1>
        <p>お探しのページは移動または削除された可能性があります。</p>
        <Link to="/" className="btn btn-primary">
          TOPへ戻る
        </Link>
      </div>
    </div>
  );
}
