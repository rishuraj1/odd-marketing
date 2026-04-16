import Link from "next/link";

interface ServiceCardProps {
  id?: string;
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  tags = [],
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className={`group relative w-full rounded-2xl p-6 sm:p-7 border transition-all duration-500 hover:-translate-y-1 ${
        featured
          ? "bg-[#ff5c35]/10 border-[#ff5c35]/30 hover:border-[#ff5c35]/60"
          : "bg-[#141414] border-[#222222] hover:border-[#333333]"
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-[#ff5c35] bg-[#ff5c35]/10 px-2 py-1 rounded-full border border-[#ff5c35]/30">
          Popular
        </span>
      )}

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${
          featured ? "bg-[#ff5c35]/20" : "bg-[#222222]"
        }`}
      >
        {icon}
      </div>

      <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#fafafa] mb-3">
        {title}
      </h3>

      <p className="text-[#6b6b6b] text-sm leading-relaxed mb-5">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-[#888888] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href="/contact"
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group/link ${
          featured
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
  );
}
