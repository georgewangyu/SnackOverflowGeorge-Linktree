type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="36" height="36" rx="11" fill="#141414" />
      <text
        x="18"
        y="21"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="11"
        fontWeight="900"
        fill="#f8f7f2"
      >
        GW
      </text>
      <path d="M10 26h16" stroke="#315fd6" strokeLinecap="round" strokeWidth="3" />
      <circle cx="28" cy="10" r="4" fill="#d6b95a" />
    </svg>
  );
}
