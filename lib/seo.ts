export const SITE_URL = (process.env.SITE_URL ?? 'https://www.the3rdlayers.com').replace(/\/$/, '');
export const SITE_NAME = 'THE THREE LAYERS';
export const SITE_TAGLINE = 'IDEAS. CODE. IMPACT.';
export const BUSINESS_NAME = 'THE THREE LAYERS';
export const CONTACT_EMAIL = 'hello@the3rdlayers.com';
export const CONTACT_PHONE = '+919313504709';
export const CONTACT_PHONE_DISPLAY = '+91 93135 04709';
export const WHATSAPP_URL = 'https://wa.me/9313504709';

export const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '',
  addressLocality: 'Surat',
  addressRegion: 'Gujarat',
  postalCode: '395001',
  addressCountry: 'IN',
};

export const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 21.17024,
  longitude: 72.831061,
};

export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/company/the3rdlayers',
  twitter: 'https://x.com/the3rdlayers',
  github: 'https://github.com/the3rdlayers',
  instagram: 'https://www.instagram.com/the3rdlayers',
};

export const TITLE =
  'THE THREE LAYERS — Web Development, E-Commerce & Design Studio in Surat, India';

export const DESCRIPTION =
  'Surat-based freelance web development & design studio serving international clients — Next.js, Shopify, mobile apps, AWS/GCP/Cloudflare deployment, UI/UX design and SEO.';

export const KEYWORDS = [
  'Web Development',
  'Website Development',
  'Web Design',
  'Freelance Web Developer',
  'Freelance Website Development',
  'Freelancer in Surat',
  'Web Developer Surat',
  'Website Development Company Surat Gujarat India',
  'Web Development India',
  'Next.js Development',
  'Next.js Developer',
  'React Development',
  'React Developer',
  'Frontend Development',
  'Full Stack Development',
  'E-Commerce Development',
  'Shopify Development',
  'Shopify Plus',
  'Mobile App Development',
  'iOS Development',
  'Android Development',
  'Flutter Development',
  'Custom Software Development',
  'UI UX Design',
  'Website Design',
  'Branding',
  'Deployment',
  'Cloud Deployment',
  'AWS Deployment',
  'AWS Development',
  'GCP Development',
  'Google Cloud',
  'Cloudflare Deployment',
  'DevOps',
  'CI/CD',
  'Website Deployment Services',
  'SEO Services',
  'Search Engine Optimization',
  'Digital Marketing',
  'Performance Optimization',
  'Website Audit',
  'Remote Developer',
  'Hire Freelance Developer',
  'The Three Layers',
  'Surat',
  'Gujarat',
];

export const SERVICES = [
  {
    name: 'Freelance Web Development',
    description:
      'End-to-end custom website development for startups and growing businesses, delivered by expert freelance developers.',
  },
  {
    name: 'Next.js & React Development',
    description:
      'High-performance Next.js and React applications with SSR, blazing-fast loads, and scalable architecture.',
  },
  {
    name: 'E-Commerce Development',
    description:
      'Custom Shopify Plus and e-commerce stores engineered for conversions, multi-currency checkout, and growth.',
  },
  {
    name: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android applications with Flutter and REST APIs, built for international markets.',
  },
  {
    name: 'UI/UX & Web Design',
    description:
      'Bold editorial UI/UX and web design that turn brands into memorable digital experiences.',
  },
  {
    name: 'Cloud Deployment & DevOps',
    description:
      'Production deployment on AWS, Google Cloud, and Cloudflare with CI/CD pipelines, monitoring, and scaling.',
  },
  {
    name: 'Digital Marketing & SEO',
    description:
      'SEO and growth marketing that help international businesses get found, ranked, and booked.',
  },
  {
    name: 'Custom Software Development',
    description:
      'Bespoke web applications, portals, and management systems engineered around your exact workflow.',
  },
] as const;

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness', 'OnlineBusiness'],
        '@id': `${SITE_URL}/#business`,
        name: BUSINESS_NAME,
        alternateName: 'T3L',
        url: SITE_URL,
        logo: `${SITE_URL}/image/T3L_logo_8K_transparent.png`,
        image: `${SITE_URL}/opengraph-image`,
        description: DESCRIPTION,
        slogan: SITE_TAGLINE,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        priceRange: '$$',
        currenciesAccepted: 'USD, INR, EUR, GBP, AED',
        paymentAccepted: 'Bank Transfer, PayPal, Stripe, Razorpay',
        address: ADDRESS,
        geo: GEO,
        areaServed: [
          { '@type': 'Continent', name: 'Worldwide' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'AdministrativeArea', name: 'Gujarat' },
          { '@type': 'City', name: 'Surat' },
        ],
        sameAs: Object.values(SOCIALS),
        makesOffer: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, description: s.description },
        })),
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/image/T3L_logo_8K_transparent.png`,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        address: ADDRESS,
        sameAs: Object.values(SOCIALS),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT_PHONE,
          contactType: 'sales',
          email: CONTACT_EMAIL,
          areaServed: ['Worldwide', 'India', 'Surat'],
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS_NAME,
        description: DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}