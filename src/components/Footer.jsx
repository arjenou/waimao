import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, navLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Logo />
          <p>
            日本と世界をつなぐ、次世代の通関プラットフォーム。
            <br />
            輸出入通関代行・国際物流・貿易DXで、お客様のビジネスをサポートします。
          </p>
          <div className="site-footer__contact">
            <span>
              <Icon name="phone" size={16} /> {company.tel}
            </span>
            <span>
              <Icon name="mail" size={16} /> {company.email}
            </span>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>サイトマップ</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>サポート</h4>
          <ul>
            <li>
              <Link to="/faq">よくあるご質問</Link>
            </li>
            <li>
              <Link to="/contact">お問い合わせ</Link>
            </li>
            <li>
              <Link to="/services">料金・お見積り</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__cta">
          <h4>まずはご相談ください</h4>
          <p>無料お見積り・ご相談は24時間受付中です。</p>
          <Link to="/contact" className="btn btn-primary btn-sm">
            無料相談する
          </Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p className="site-footer__legal">
          <Link to="/about">会社概要</Link>
          <span>/</span>
          <Link to="/contact">プライバシーポリシー</Link>
        </p>
      </div>
    </footer>
  );
}
