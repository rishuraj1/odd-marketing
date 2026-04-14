"use client";

import { useState, type FormEvent } from "react";

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: "hello@oddmarketing.co",
    href: "mailto:hello@oddmarketing.co",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Remote-first, Worldwide",
    href: null,
  },
  {
    icon: "⏱️",
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const services = [
  "Social Media Content",
  "Ad Copywriting",
  "Branding Content",
  "Campaign Strategy",
  "Not sure yet",
];

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <span className="text-[#ff5c35] text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h1 className="font-[family-name:var(--font-syne)] font-black text-4xl sm:text-5xl mt-4 mb-5 leading-tight">
            Let&apos;s make<br />
            something<br />
            <span className="text-[#ff5c35]">Odd together.</span>
          </h1>
          <p className="text-[#6b6b6b] text-base leading-relaxed mb-10">
            Whether you have a brief ready or just an idea, we&apos;d love to
            hear from you. Drop us a message and we&apos;ll get back to you within
            24 hours.
          </p>

          <div className="space-y-4">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#222222] bg-[#141414]"
              >
                <span className="text-xl w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center shrink-0">
                  {method.icon}
                </span>
                <div>
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide font-medium">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-[#fafafa] text-sm font-medium hover:text-[#ff5c35] transition-colors duration-200"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-[#fafafa] text-sm font-medium">
                      {method.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center py-16 px-8 rounded-2xl border border-[#ff5c35]/30 bg-[#ff5c35]/5">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="font-[family-name:var(--font-syne)] font-black text-3xl mb-3">
                  Message received!
                </h2>
                <p className="text-[#888888] text-base mb-6 max-w-sm mx-auto">
                  Thanks for reaching out. We&apos;ll review your message and get
                  back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#333333] text-[#aaaaaa] text-sm font-medium hover:border-[#555555] hover:text-[#fafafa] transition-all duration-200"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 rounded-2xl border border-[#222222] bg-[#141414] space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#aaaaaa] mb-2"
                  >
                    Full Name <span className="text-[#ff5c35]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-[#fafafa] text-sm placeholder-[#444444] outline-none transition-all duration-200 focus:border-[#ff5c35]/60 focus:ring-1 focus:ring-[#ff5c35]/30 ${
                      errors.name ? "border-red-500/60" : "border-[#2a2a2a]"
                    }`}
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-400 text-xs mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#aaaaaa] mb-2"
                  >
                    Email Address <span className="text-[#ff5c35]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-[#fafafa] text-sm placeholder-[#444444] outline-none transition-all duration-200 focus:border-[#ff5c35]/60 focus:ring-1 focus:ring-[#ff5c35]/30 ${
                      errors.email ? "border-red-500/60" : "border-[#2a2a2a]"
                    }`}
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-400 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-sm font-medium text-[#aaaaaa] mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-sm outline-none transition-all duration-200 focus:border-[#ff5c35]/60 focus:ring-1 focus:ring-[#ff5c35]/30 appearance-none cursor-pointer"
                  style={{ color: form.service ? "#fafafa" : "#444444" }}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ color: "#fafafa", background: "#0a0a0a" }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#aaaaaa] mb-2"
                >
                  Message <span className="text-[#ff5c35]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your brand and what you're looking to achieve..."
                  className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-[#fafafa] text-sm placeholder-[#444444] outline-none transition-all duration-200 focus:border-[#ff5c35]/60 focus:ring-1 focus:ring-[#ff5c35]/30 resize-none ${
                    errors.message ? "border-red-500/60" : "border-[#2a2a2a]"
                  }`}
                />
                {errors.message && (
                  <p role="alert" className="text-red-400 text-xs mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#ff5c35] text-[#0a0a0a] font-bold text-base transition-all duration-300 hover:bg-[#ff7a5a] hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 shadow-[0_0_30px_rgba(255,92,53,0.25)]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-[#555555] text-xs text-center">
                We&apos;ll never share your information. Read our{" "}
                <span className="text-[#888888] cursor-pointer hover:text-[#fafafa] transition-colors duration-200">
                  privacy policy
                </span>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
