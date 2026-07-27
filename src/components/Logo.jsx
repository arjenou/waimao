import companyLogo from "../assets/company-logo.jpg";

export default function Logo() {
  return (
    <span className="logo">
      <img
        className="logo__image"
        src={companyLogo}
        alt="ブルーオーシャンスター株式会社"
      />
    </span>
  );
}
