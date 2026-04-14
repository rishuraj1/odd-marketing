import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Odd Marketing",
  description:
    "Get in touch with Odd Marketing. Tell us about your brand and we'll craft a content strategy that makes you stand out.",
};

export default function ContactPage() {
  return <ContactClient />;
}
