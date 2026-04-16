import Link from "next/link";

interface HeroSectionProps {
  badge?: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  badge,
  headline,
  headlineAccent,
  subheadline,
  ctaText = "Get Started",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff5c35]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle, #fafafa 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5c35]/30 bg-[#ff5c35]/10 text-[#ff5c35] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c35] animate-pulse" />
            {badge}
          </div>
        )}

        <h1 className="font-[family-name:var(--font-syne)] font-black text-[clamp(1.75rem,8vw,5rem)] sm:text-6xl md:text-7xl lg:text-8xl leading-[1] tracking-tight mb-4 sm:mb-6">
          {headline}
          {headlineAccent && (
            <>
              <br />
              <span className="text-[#ff5c35]">{headlineAccent}</span>
            </>
          )}
        </h1>

        <p className="text-[#6b6b6b] text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          {subheadline}
        </p>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full">
          <Link
            href={ctaHref}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-4 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,92,53,0.3)] max-w-[200px] sm:max-w-none"
          >
            <span className="truncate">{ctaText}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-4 rounded-full border border-[#333333] text-[#aaaaaa] font-semibold text-sm sm:text-base transition-all duration-300 hover:border-[#555555] hover:text-[#fafafa] max-w-[200px] sm:max-w-none"
            >
              <span className="truncate">{secondaryCtaText}</span>
            </Link>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
