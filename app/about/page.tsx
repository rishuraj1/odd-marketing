import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Odd Marketing",
  description:
    "The story of Odd Marketing. We help brands stand out with creative storytelling and a passionate team of content creators.",
};

const timeline = [
  {
    year: "2020",
    title: "The Odd Idea",
    description:
      "Two former agency creatives got tired of watching great brands produce forgettable content. Odd Marketing was born in a shared Google Doc at 2am.",
  },
  {
    year: "2021",
    title: "First 10 Clients",
    description:
      "Word spread fast. We signed our first 10 clients entirely through referrals, with zero paid ads. The work spoke for itself.",
  },
  {
    year: "2022",
    title: "Team & Systems",
    description:
      "We built out our core team of writers, strategists, and designers. Our AI-assisted workflow emerged, cutting production time in half.",
  },
  {
    year: "2023",
    title: "Scaling Odd",
    description:
      "Crossed 100 client milestone. Launched our signature Campaign Strategy service and expanded into international markets.",
  },
  {
    year: "2024",
    title: "200+ Brands & Growing",
    description:
      "Today we work with over 200 brands globally. Still independent. Still odd. Still making content that people actually remember.",
  },
];

const team = [
  {
    id: 1,
    name: "Sasha Rivers",
    role: "Co-Founder & Creative Director",
    bio: "10 years in brand storytelling. Believes that constraints breed creativity and that the best ideas come from the unexpected.",
    avatar: "SR",
    color: "#ff5c35",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Jordan Kim",
    role: "Co-Founder & Strategy Lead",
    bio: "Former performance marketer turned content strategist. Obsessed with making creative work measurably drive results.",
    avatar: "JK",
    color: "#7c3aed",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Aaliya Patel",
    role: "Head of Copy",
    bio: "Writes copy that sells without feeling like it's selling. Has a rule: if it doesn't surprise you, it won't surprise the audience.",
    avatar: "AP",
    color: "#00c896",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Tomás Vega",
    role: "AI & Workflow Engineer",
    bio: "The mind behind our human-AI content pipeline. Builds systems that make great creative work faster and more consistent.",
    avatar: "TV",
    color: "#f59e0b",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "Nadia Okafor",
    role: "Social Media Lead",
    bio: "Grew her personal account to 80k followers and now deploys that know-how for brands. Knows what makes people stop scrolling.",
    avatar: "NO",
    color: "#ec4899",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Riku Tanaka",
    role: "Brand Strategist",
    bio: "Helps brands find the story only they can tell. Has worked across three continents and brings a global creative perspective.",
    avatar: "RT",
    color: "#06b6d4",
    socials: { twitter: "#", linkedin: "#" },
  },
];

const values = [
  {
    icon: "✦",
    title: "Oddness as a Feature",
    description:
      "Generic content is the enemy. We chase the unexpected angle, the bold take, the thing that makes you read twice.",
  },
  {
    icon: "◈",
    title: "Strategy First",
    description:
      "Every creative decision is anchored in business goals. Beautiful content that doesn't convert is just expensive decoration.",
  },
  {
    icon: "⟳",
    title: "Speed Without Sacrifice",
    description:
      "We've built systems that let us move faster without cutting creative corners. Your deadline is our deadline.",
  },
  {
    icon: "∞",
    title: "Long-term Partnership",
    description:
      "We don't do one-offs. We build relationships with brands and get better at your voice the longer we work together.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center pt-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/6 blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="font-[family-name:var(--font-syne)] font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mt-4 mb-6">
            We were tired of<br />
            <span className="text-[#ff5c35]">boring marketing.</span>
          </h1>
          <p className="text-[#6b6b6b] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            So we built the agency we always wished existed. One that treats
            creativity as a competitive advantage, not an afterthought.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              Mission
            </span>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] font-black text-3xl sm:text-4xl mb-6">
            Helping brands stand out through creative storytelling
          </h2>
          <div className="space-y-4 text-[#888888] text-base leading-relaxed">
            <p>
              At Odd Marketing, we believe the most powerful brands are the ones
              with the courage to be genuinely themselves. Our mission is to help
              businesses find that authentic voice and turn it into content
              that&apos;s impossible to ignore.
            </p>
            <p>
              We combine the strategic rigor of seasoned marketers with the raw
              creativity of storytellers who refuse to settle. The result is
              content that doesn&apos;t just get clicks — it gets remembered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
              How it got Odd
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#222222] -translate-x-px hidden sm:block" aria-hidden="true" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col sm:flex-row gap-8 items-start ${
                    index % 2 === 0
                      ? "sm:justify-end sm:text-right"
                      : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="sm:w-5/12">
                    <div
                      className={`p-6 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300`}
                    >
                      <span className="text-[#ff5c35] font-[family-name:var(--font-syne)] font-black text-2xl">
                        {event.year}
                      </span>
                      <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-[#6b6b6b] text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff5c35] border-4 border-[#0a0a0a] z-10"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
              Our values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300"
              >
                <span className="text-[#ff5c35] text-2xl font-black font-[family-name:var(--font-syne)] mb-4 block">
                  {value.icon}
                </span>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
              The Team
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-3">
              The brilliant oddballs
            </h2>
            <p className="text-[#6b6b6b] text-lg mt-4 max-w-xl mx-auto">
              A tight-knit crew of writers, strategists, and creative technologists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="group p-7 rounded-2xl border border-[#222222] bg-[#141414] hover:border-[#333333] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#0a0a0a] font-bold text-base font-[family-name:var(--font-syne)] mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: member.color }}
                >
                  {member.avatar}
                </div>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#ff5c35] text-xs font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-syne)] font-black text-3xl sm:text-4xl mb-4">
            Want to join the team?
          </h2>
          <p className="text-[#6b6b6b] mb-8">
            We&apos;re always looking for talented people who think differently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff5c35] text-[#0a0a0a] font-bold text-sm transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
