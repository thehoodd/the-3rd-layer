import type { Metadata } from "next";
import { SITE_NAME, DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work — Next.js, E-Commerce & App Development Portfolio",
  description:
    "A curated portfolio of production web applications, custom e-commerce engines, and mobile apps built by THE THREE LAYERS — website development, design, and deployment for clients worldwide.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/work",
    title: "Work — Next.js, E-Commerce & App Development Portfolio",
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Next.js, E-Commerce & App Development Portfolio",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  const itemListElement = [
    { name: "Jenil's Sabras Masala", url: "https://jenilsmasala.com/" },
    { name: "Alburaq", url: "https://apps.apple.com/us/app/al-buraq/" },
    { name: "Altius Education", url: "https://www.altiuseducation.ca/" },
    { name: "HM Consultant", url: "https://www.hmconsultech.com/" },
    { name: "Gurukrupa", url: "https://gurukripaenterprise.com/" },
    { name: "Aashik AC Technician", url: "https://actechnicianaashik.shop/" },
  ].map((item, idx) => ({ "@type": "ListItem", position: idx + 1, name: item.name, url: item.url }));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "THE THREE LAYERS — Selected Works",
    numberOfItems: itemListElement.length,
    itemListElement,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {children}
    </>
  );
}