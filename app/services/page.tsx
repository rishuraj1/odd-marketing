import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — Odd Marketing",
  description:
    "Explore Odd Marketing services: Social Media Content, Ad Copywriting, Branding Content, and Campaign Strategy for bold brands.",
};

const services = [
  {
    id: "social-media",
    icon: "📱",
    title: "Social Media Content",
    description:
      "Platform-native content built to perform. We craft posts, reels, carousels, and stories that feel organic on every platform — Instagram, TikTok, LinkedIn, X, and beyond. We write to your audience, not to a template.",
    tags: ["Instagram", "TikTok", "LinkedIn", "X", "Threads"],
    featured: false,
    deliverables: [
      "30-day content calendars",
      "Caption & hashtag writing",
      "Reel scripts & hooks",
      "Story sequences",
      "Community reply templates",
    ],
  },
  {
    id: "ad-copy",
    icon: "✍️",
    title: "Ad Copywriting",
    description:
      "Conversion-optimized copy for paid media campaigns. We write ads that earn the click — combining psychological triggers, brand voice, and platform-specific nuance into copy that performs from day one.",
    tags: ["Google Ads", "Meta Ads", "Display", "YouTube"],
    featured: true,
    deliverables: [
      "Multi-variant ad copy sets",
      "Headline & CTA testing",
      "Landing page copy",
      "A/B test strategy",
      "Performance analysis",
    ],
  },
  {
    id: "branding",
    icon: "🎨",
    title: "Branding Content",
    description:
      "Your brand voice, articulated and made actionable. We develop messaging frameworks, tone-of-voice guides, and brand narratives that keep your communication consistent, compelling, and unmistakably you.",
    tags: ["Brand Voice", "Messaging", "Tone Guide", "Positioning"],
    featured: false,
    deliverables: [
      "Brand messaging framework",
      "Tone of voice guide",
      "Positioning statement",
      "Tagline development",
      "Core narrative document",
    ],
  },
  {
    id: "campaigns",
    icon: "🎯",
    title: "Campaign Strategy",
    description:
      "Full-funnel campaign concepting and execution. We go from brief to launch — developing the big idea, content plan, channel strategy, and all creative assets needed to make your campaign land.",
    tags: ["Product Launches", "Seasonal", "Brand Awareness", "Growth"],
    featured: false,
    deliverables: [
      "Campaign concept & rationale",
      "Channel strategy",
      "Content production plan",
      "Launch timeline",
      "Post-campaign analysis",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We get to know your brand, audience, goals, and competitive landscape. No shortcuts.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We map the content approach: what to say, where to say it, and how to make it feel undeniably you.",
  },
  {
    step: "03",
    title: "Creation",
    description:
      "Our team gets to work. First drafts in 48 hours. Revisions are part of the process, not an extra.",
  },
  {
    step: "04",
    title: "Deliver & Iterate",
    description:
      "We launch, measure, and keep improving. Great content is a living thing, not a one-time deliverable.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center pt-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff5c35]/6 blur-[100px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="font-[family-name:var(--font-syne)] font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mt-4 mb-6">
            Services that<br />
            <span className="text-[#ff5c35]">actually work.</span>
          </h1>
          <p className="text-[#6b6b6b] text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Every service is delivered with strategy at its core and creativity
            at its heart. No filler. No fluff.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`group relative rounded-2xl border transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                  service.featured
                    ? "bg-[#ff5c35]/8 border-[#ff5c35]/30 hover:border-[#ff5c35]/50"
                    : "bg-[#141414] border-[#222222] hover:border-[#333333]"
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff5c35] to-transparent" aria-hidden="true" />
                )}

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 ${
                        service.featured ? "bg-[#ff5c35]/20" : "bg-[#222222]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    {service.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff5c35] bg-[#ff5c35]/10 px-2 py-1 rounded-full border border-[#ff5c35]/30">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-[#888888] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-[#888888] text-xs font-semibold uppercase tracking-widest mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-[#aaaaaa]"
                        >
                          <span className="text-[#ff5c35] text-xs" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/link ${
                      service.featured
                        ? "text-[#ff5c35] hover:gap-3"
                        : "text-[#888888] hover:text-[#fafafa] hover:gap-3"
                    }`}
                  >
                    Get started
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
              Our process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#222222] z-0"
                    style={{ width: "calc(100% - 48px)", left: "calc(100% - 24px)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 p-6 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300">
                  <span className="font-[family-name:var(--font-syne)] font-black text-4xl text-[#ff5c35]/20 mb-3 block">
                    {step.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-syne)] font-black text-3xl sm:text-4xl mb-4">
            Not sure what you need?
          </h2>
          <p className="text-[#6b6b6b] mb-8">
            Let&apos;s talk. We&apos;ll help you figure out the right approach for your
            brand and goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-sm transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105"
          >
            Book a Free Chat
          </Link>
        </div>
      </section>
    </>
  );
}
