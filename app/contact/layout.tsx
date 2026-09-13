import type { Metadata } from "next";
import { SITE_NAME, DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Freelance Web Developer in Surat | Start Your Project",
  description:
    "Start your project with THE THREE LAYERS — a freelance web development & design studio in Surat, Gujarat, India. Custom websites, e-commerce, mobile apps, and cloud deployment for international clients.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/contact",
    title: "Contact — Start Your Next Web Development Project",
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Start Your Next Web Development Project",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}