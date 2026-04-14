import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

const features = [
  {
    icon: "✦",
    title: "Creative Content",
    description:
      "We don't do cookie-cutter. Every piece is crafted to feel uniquely yours — unexpected, memorable, and impossible to scroll past.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Marketing trends move fast. So do we. Get campaign-ready content in days, not weeks. Speed without compromise.",
  },
  {
    icon: "🤝",
    title: "Human + AI Blend",
    description:
      "We pair human creativity with AI precision. The result? Content that feels personal, scales effortlessly, and performs.",
  },
];

const servicesPreview = [
  {
    icon: "📱",
    title: "Social Media Content",
    description: "Posts, reels, threads, stories — content that sparks conversation and builds community.",
    tags: ["Instagram", "TikTok", "LinkedIn"],
  },
  {
    icon: "✍️",
    title: "Ad Copywriting",
    description: "Conversion-first copy for paid media. We write ads that people actually want to click.",
    tags: ["Google Ads", "Meta Ads", "Display"],
    featured: true,
  },
  {
    icon: "🎨",
    title: "Branding Content",
    description: "Your brand voice, defined and deployed consistently across every touchpoint.",
    tags: ["Brand Voice", "Messaging", "Identity"],
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Odd Marketing completely transformed how we show up online. Our engagement tripled in 60 days. Genuinely couldn't believe the results.",
    author: "Priya Mehta",
    role: "Founder, Bloom Studio",
    avatar: "PM",
    color: "#7c3aed",
  },
  {
    id: 2,
    quote:
      "The team has this rare ability to understand your brand and then push it further than you imagined. That's the Odd difference.",
    author: "Marcus Chen",
    role: "CMO, Horizon Tech",
    avatar: "MC",
    color: "#ff5c35",
  },
  {
    id: 3,
    quote:
      "Fast, creative, and never generic. They delivered our full campaign content in under a week and it outperformed everything we'd run before.",
    author: "Amara Osei",
    role: "Marketing Lead, Kora Foods",
    avatar: "AO",
    color: "#00c896",
  },
];

const stats = [
  { value: "200+", label: "Brands Served" },
  { value: "3×", label: "Avg. Engagement Lift" },
  { value: "48hr", label: "First Draft Delivery" },
  { value: "97%", label: "Client Retention" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="Creative Content Agency"
        headline="Marketing,"
        headlineAccent="but make it Odd."
        subheadline="We help ambitious brands cut through the noise with content that's unexpected, strategic, and unforgettable. Powered by real humans with a little AI magic."
        ctaText="Start Creating"
        ctaHref="/contact"
        secondaryCtaText="See Our Services"
        secondaryCtaHref="/services"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-[#1a1a1a]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-syne)] font-black text-3xl text-[#fafafa] mb-1">
                {stat.value}
              </div>
              <div className="text-[#6b6b6b] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </HeroSection>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              Why Odd?
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3 mb-4">
              The Odd advantage
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-xl mx-auto">
              We&apos;re not a typical agency. Here&apos;s what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-[#ff5c35] text-3xl font-black font-[family-name:var(--font-syne)] mb-5 block">
                  {feature.icon}
                </span>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
            <div>
              <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
                Services that move the needle
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#fafafa] transition-colors duration-200 shrink-0 group"
            >
              View all services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesPreview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
              Brands that went Odd
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#ff5c35"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#cccccc] text-sm leading-relaxed mb-8 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[#fafafa] text-sm font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-[#6b6b6b] text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-[#ff5c35]/20 bg-[#141414] p-12 sm:p-16 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ff5c35]/8 blur-[80px]" />
            </div>

            <span className="relative inline-block text-4xl mb-6">🚀</span>
            <h2 className="relative font-[family-name:var(--font-syne)] font-black text-3xl sm:text-4xl mb-4">
              Ready to make it Odd?
            </h2>
            <p className="relative text-[#6b6b6b] text-lg mb-8 max-w-md mx-auto">
              Let&apos;s build content that makes your audience stop, think, and
              take action.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-base transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,92,53,0.4)]"
            >
              Start the Conversation
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
          </div>
        </div>
      </section>
    </>
  );
}
