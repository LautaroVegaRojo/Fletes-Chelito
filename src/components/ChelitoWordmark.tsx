import "./ChelitoWordmark.css";

type Variant = "playful" | "clean";

export default function ChelitoWordmark({ variant = "playful" }: { variant?: Variant }) {
  return (
    <a className={`wc-logo wc-${variant}`} href="#home" aria-label="Fletes Chelito">
      <span className="wc-top">Fletes</span>
      <span className="wc-bottom">Chelito</span>
      {variant === "playful" && (
        <svg className="wc-underline" viewBox="0 0 160 16" preserveAspectRatio="none">
          <path d="M2 12 Q60 2 158 8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )}
    </a>
  );
}
