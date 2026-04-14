"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Odd Marketing Home"
        >
          <span className="w-8 h-8 rounded-full bg-[#ff5c35] flex items-center justify-center text-[#0a0a0a] font-bold text-sm font-[family-name:var(--font-syne)] transition-transform duration-300 group-hover:rotate-12">
            O
          </span>
          <span className="font-[family-name:var(--font-syne)] font-bold text-lg tracking-tight">
            Odd<span className="text-[#ff5c35]">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-[#ff5c35]"
                    : "text-[#aaaaaa] hover:text-[#fafafa]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#ff5c35] transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ff5c35] text-[#0a0a0a] text-sm font-semibold transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-105 active:scale-95"
        >
          Let&apos;s Talk
        </Link>

        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#fafafa] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222222]`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-base font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#ff5c35]"
                    : "text-[#aaaaaa] hover:text-[#fafafa]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ff5c35] text-[#0a0a0a] text-sm font-semibold"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
