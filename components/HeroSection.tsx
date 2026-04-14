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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
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

        <h1 className="font-[family-name:var(--font-syne)] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
          {headline}
          {headlineAccent && (
            <>
              <br />
              <span className="text-[#ff5c35]">{headlineAccent}</span>
            </>
          )}
        </h1>

        <p className="text-[#6b6b6b] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-base transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,92,53,0.3)]"
          >
            {ctaText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {secondaryCtaText && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#333333] text-[#aaaaaa] font-semibold text-base transition-all duration-300 hover:border-[#555555] hover:text-[#fafafa]"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
