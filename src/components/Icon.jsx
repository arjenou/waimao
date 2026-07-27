const paths = {
  customs: (
    <>
      <path d="M4 20h16" />
      <path d="M6 20V10l6-4 6 4v10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  logistics: (
    <>
      <rect x="2" y="9" width="13" height="8" rx="1" />
      <path d="M15 12h3.5l3.5 3v2h-7" />
      <circle cx="6.5" cy="19" r="1.6" />
      <circle cx="17.5" cy="19" r="1.6" />
    </>
  ),
  tech: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M7 9l3 2-3 2" />
      <path d="M13 13h4" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="M5 13l4 4L19 7" />
    </>
  ),
  chevron: (
    <>
      <path d="M6 9l6 6 6-6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l2 5-2.5 2a11 11 0 005.5 5.5l2-2.5 5 2v3a2 2 0 01-2 2C10.6 20 4 13.4 4 5a2 2 0 012-2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  ship: (
    <>
      <path d="M3 15l1.5 4.5a2 2 0 001.9 1.5h11.2a2 2 0 001.9-1.5L21 15" />
      <path d="M5 15V9h5V5h4v4h1l2 6" />
    </>
  ),
  filter: (
    <>
      <path d="M4 5h16" />
      <path d="M7 12h10" />
      <path d="M10 19h4" />
    </>
  ),
  quote: (
    <>
      <path d="M7 7h4v4a4 4 0 01-4 4H6" />
      <path d="M15 7h4v4a4 4 0 01-4 4h-1" />
    </>
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className = "" }) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}
