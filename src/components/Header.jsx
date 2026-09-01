import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { navLinks } from "../data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          <Logo />
        </NavLink>

        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `site-header__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <Link to="/contact" className="btn btn-primary btn-sm">
            無料お見積り
          </Link>
        </div>

        <button
          className={`site-header__burger ${open ? "is-open" : ""}`}
          aria-label="メニューを開く"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`site-header__mobile ${open ? "is-open" : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="site-header__mobile-link">
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="site-header__mobile-link">
            お問い合わせ
          </NavLink>
        </nav>
        <Link to="/contact" className="btn btn-primary btn-block">
          無料お見積りを依頼する
        </Link>
      </div>
    </header>
  );
}
