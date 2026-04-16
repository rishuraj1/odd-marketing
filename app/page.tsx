import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

const features = [
  
{
  title: "The Scroll-Stop Effect",
  description:
    "Predictable content gets scrolled past in 0.3 seconds. Odd stops thumbs cold. The brain is wired to notice pattern breaks — and that moment of hesitation is where brands are built.",
},
{
  title: "The Viral Factor",
  description:
    "Nobody screenshots the expected. Content spreads when it surprises, confuses for a beat, then clicks. Odd isn't a risk — it's the only reliable formula for organic reach.",
},
{
  title: "Memorable",
  description:
    "You can't recall a perfect ad, but you remember the weird one from three years ago. Odd content lodges in long-term memory. That's not accident — it's neuroscience.",
},
];

const servicesPreview = [
  {
    icon: "✍️",
    title: "Content Creation",
    description: "From reels to static posts, stories to long-form — we craft thumb-stopping content tailored to your brand voice and platform.",
    tags: ["Reels", "Static Posts", "Stories", "Copywriting"],
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description: "We run your social channels end-to-end — content calendar, posting, audience engagement, and ads management across all major platforms.",
    tags: ["Instagram", "Facebook", "LinkedIn", "WhatsApp"],
    featured: true,
  },
  {
    icon: "🔍",
    title: "Website SEO & GEO",
    description: "Rank higher on Google and get discovered by AI search engines. We optimize your site for both traditional and generative search.",
    tags: ["SEO", "GEO", "Google", "AI Search"],
  },
  {
    icon: "🏢",
    title: "Company Presence",
    description: "Build a commanding brand identity online and offline — from LinkedIn authority to physical marketing materials that leave an impression.",
    tags: ["Brand Identity", "LinkedIn", "Physical Marketing"],
  },
  {
    icon: "📊",
    title: "Product Market Analytics",
    description: "Data-driven insights into how your product and content performs in the market — so every decision is backed by numbers, not guesswork.",
    tags: ["Market Research", "Analytics", "Competitor Analysis"],
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
const rows = [
  {
    label: "Monthly cost",
    bad: "₹1 – 1.5L / month",
    badNote: "Salaries, PF, bonuses",
    good: "Cost per outcome",
    goodNote: "No fixed payroll liability",
  },
  {
    label: "Setup & equipment",
    bad: "₹1 – 2L one-time",
    badNote: "Cameras, software, studio",
    good: "Zero",
    goodNote: "All tools on our end",
  },
  {
    label: "Management overhead",
    bad: "High",
    badNote: "Hiring, onboarding, reviews, conflicts",
    good: "None",
    goodNote: "We're self-managed",
  },
  {
    label: "Founder bandwidth",
    bad: "Drained",
    badNote: "You become part-time marketing manager",
    good: "Fully freed",
    goodNote: "Focus on R&D and production",
  },
  {
    label: "Scalability",
    bad: "Slow & costly",
    badNote: "New hire = new cost + new risk",
    good: "Instant",
    goodNote: "Scale up or down with a call",
  },
  {
    label: "Expertise",
    bad: "Limited to your hire",
    badNote: "One person, one skill set",
    good: "Full-stack team",
    goodNote: "Strategy, creative, ads, SEO — all in",
  },
  {
    label: "Risk",
    bad: "High",
    badNote: "Attrition, burnout, bad hires",
    good: "Low",
    goodNote: "Accountable to results, not hours",
  },
];
const stats = [
  // { value: "12+", label: "Brands Served" },
  { value: "48hr", label: "First Draft Delivery" },
  { value: "24x7", label: "Customer Support" },
  // { value: "97%", label: "Client Retention" },
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
        <div className="mt-16 pt-12 border-t border-[#1a1a1a]">
  <div className="overflow-y-auto max-h-[320px] rounded-xl border border-[#1a1a1a]">
    <table className="w-full text-sm border-collapse">
      <thead className="sticky top-0 z-10 bg-[#0a0a0a]">
        <tr>
          <th className="w-[30%] p-2 sm:p-3 text-left text-[#6b6b6b] font-normal border-b border-[#1a1a1a] text-xs sm:text-sm"></th>
          <th className="w-[35%] p-2 sm:p-3 text-center border-b border-[#1a1a1a]">
            <div className="text-[#fafafa] font-medium text-xs sm:text-sm">In-house team</div>
            <div className="text-[#6b6b6b] text-[10px] sm:text-xs mt-1">Hiring employees</div>
          </th>
          <th className="w-[35%] p-2 sm:p-3 text-center border-b border-[#1a1a1a]">
            <div className="text-[#4ade80] font-medium text-xs sm:text-sm">Partner with us</div>
            <div className="text-[#22c55e] text-[10px] sm:text-xs mt-1">Outsourced</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="hover:bg-[#111111] transition-colors">
            <td className="p-2 sm:p-3 text-[#6b6b6b] text-[10px] sm:text-xs border-b border-[#1a1a1a] font-medium">{row.label}</td>
            <td className="p-2 sm:p-3 border-b border-[#1a1a1a]">
              <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full bg-red-950 text-red-400 inline-block mb-1">{row.bad}</span>
              <p className="text-[10px] sm:text-xs text-[#6b6b6b]">{row.badNote}</p>
            </td>
            <td className="p-2 sm:p-3 border-b border-[#1a1a1a]">
              <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full bg-green-950 text-green-400 inline-block mb-1">{row.good}</span>
              <p className="text-[10px] sm:text-xs text-green-900">{row.goodNote}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </HeroSection>

      <section className="py-12 sm:py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[#ff5c35] text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Why Odd?
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-2xl sm:text-5xl mt-2 sm:mt-3 mb-2 sm:mb-4">
              The Odd advantage
            </h2>
            <p className="text-[#6b6b6b] text-sm sm:text-lg max-w-xl mx-auto">
              We&apos;re not a typical agency. Here&apos;s what sets us apart.
            </p>
          </div>

          {/* Mobile: horizontal snap carousel | Desktop: 3-col grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="w-[78vw] max-w-[300px] md:max-w-none flex-shrink-0 md:flex-shrink md:w-auto snap-center group p-5 sm:p-8 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300"
              >
                <span className="text-[#ff5c35] text-2xl sm:text-3xl font-black font-[family-name:var(--font-syne)] mb-3 sm:mb-5 block">
                  {feature.icon}
                </span>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-base sm:text-xl mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {/* Carousel dot indicators on mobile only */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {features.map((f, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4 mb-6 sm:mb-16">
            <div>
              <span className="text-[#ff5c35] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="font-[family-name:var(--font-syne)] font-black text-2xl sm:text-5xl mt-2 sm:mt-3">
                Services that move the needle
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#888888] hover:text-[#fafafa] transition-colors duration-200 shrink-0 group"
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

          {/* Mobile: horizontal snap carousel | Desktop: 3-col grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {servicesPreview.map((service) => (
              <div key={service.title} className="w-[78vw] max-w-[300px] md:max-w-none flex-shrink-0 md:flex-shrink md:w-auto snap-center flex">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          {/* Carousel dot indicators on mobile only */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {servicesPreview.map((s, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[#ff5c35] text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-2xl sm:text-5xl mt-2 sm:mt-3">
              Brands that went Odd
            </h2>
          </div>

          {/* Mobile: horizontal snap carousel | Desktop: 3-col grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[78vw] max-w-[300px] md:max-w-none flex-shrink-0 md:flex-shrink md:w-auto snap-center p-5 sm:p-8 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#ff5c35"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#cccccc] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-8 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xs sm:text-sm shrink-0"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-[#fafafa] text-xs sm:text-sm font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-[#6b6b6b] text-[10px] sm:text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators — mobile only */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {testimonials.map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-[#ff5c35]/20 bg-[#141414] p-8 sm:p-16 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ff5c35]/8 blur-[80px]" />
            </div>

            <span className="relative inline-block text-4xl mb-6">🚀</span>
            <h2 className="relative font-[family-name:var(--font-syne)] font-black text-2xl sm:text-4xl mb-4">
              Ready to make it Odd?
            </h2>
            <p className="relative text-[#6b6b6b] text-lg mb-8 max-w-md mx-auto">
              Let&apos;s build content that makes your audience stop, think, and
              take action.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-base transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,92,53,0.4)]"
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
