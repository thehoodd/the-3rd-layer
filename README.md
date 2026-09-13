# THE THREE LAYERS — Editorial Digital Studio & Systems

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.43-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Location](https://img.shields.io/badge/Studio-Surat%2C%20Gujarat%2C%20India-DE3D1C?style=for-the-badge)](https://www.the3rdlayers.com)

<br />

**High-performance editorial digital studio and technology consulting firm.**  
*We design, engineer, and deploy mission-critical web platforms, custom architectures, and digital products.*

[Explore Live Website](http://localhost:3000) • [View Portfolio](/work) • [Get In Touch](/contact)

</div>

---

## 📌 Executive Summary

**The Three Layers** is an editorial digital studio and technology consultancy headquartered in **Surat, Gujarat, India**. We build scalable web platforms, bespoke web applications, enterprise software architectures, and cross-platform mobile apps for ambitious brands worldwide.

Our work unites **brutalist Swiss typography**, **warm editorial materiality**, and **flawless modern engineering** to deliver fast, accessible, and high-converting digital products.

### 🏛️ The Three Layers Methodology

Every engagement is executed across three dedicated layers of delivery:

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 01 : FOUNDATION & STRATEGY                           │
│  Discovery • System Architecture • UX Wireframing • Research │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  LAYER 02 : ENGINEERING & DESIGN                            │
│  Next.js 16 • React 19 • Brutalist UI • Tailored Animations │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  LAYER 03 : DEPLOYMENT & SCALE                              │
│  Edge CDN • High Uptime • SEO / AEO • Ongoing Maintenance   │
└─────────────────────────────────────────────────────────────┘
```

1. **Layer 01 — Foundation & Strategy:** Deep discovery, digital roadmaps, user experience blueprints, data modeling, and performance milestones.
2. **Layer 02 — Engineering & Design:** Full-stack development with Next.js App Router, React 19, Tailwind CSS 4, and Framer Motion micro-interactions.
3. **Layer 03 — Deployment & Scale:** Vercel edge deployment, lightning-fast Core Web Vitals, enterprise security, and 99.8% uptime SLA.

---

## 🌐 Pages & Route Architecture

The website uses the **Next.js App Router** with server and client components optimized for speed and interactivity.

| Route | Page Title | File Path | Type | Description |
| :--- | :--- | :--- | :--- | :--- |
| `/` | **Homepage / Index** | [`app/page.tsx`](app/page.tsx) | Server | Flagship studio landing page featuring Hero, Services, Top 4 Clients, Process, Industries, Stats, Testimonials, About, and Footer. |
| `/work` | **Work / Client Portfolio Archive** | [`app/work/page.tsx`](app/work/page.tsx) | Client | Full interactive project catalog with category filter pills (`All`, `Web Development`, `UI/UX Design`, `E-Commerce`, `Mobile App`), search tags, and live project visit links. |
| `/contact` | **Contact & Inquiries** | [`app/contact/page.tsx`](app/contact/page.tsx) | Client | Interactive project intake form with budget selector, service checkboxes, direct email/phone channels, and Surat office location details. |
| `/*` | **Global Layout & Shell** | [`app/layout.tsx`](app/layout.tsx) | Server | Root HTML structure, typography variables (Bebas Neue, Space Grotesk, Inter, JetBrains Mono), meta tags, and global custom cursor follower. |

---

## 🧩 Components Catalog

All UI components are modular, accessible, and located in the [`components/`](components/) directory:

| Component | File Path | Key Responsibilities & Highlights |
| :--- | :--- | :--- |
| **`Navbar`** | [`components/Navbar.tsx`](components/Navbar.tsx) | Sticky header with brutalist borders, brand monogram, live status indicator (`"AVAILABLE FOR Q2/Q3"`), navigation anchors, and full-screen mobile menu drawer. |
| **`Hero`** | [`components/Hero.tsx`](components/Hero.tsx) | Impactful typography section with oversized `Bebas Neue` headline, interactive strategy matrix, and dual high-contrast action buttons. |
| **`Cursor`** | [`components/Cursor.tsx`](components/Cursor.tsx) | Bespoke dual-element brutalist cursor: zero-latency cadmium orange center dot (`#DE3D1C`) + outer follower ring with spring physics and auto-expand on interactive elements. |
| **`Work`** | [`components/Work.tsx`](components/Work.tsx) | Curated homepage showcase featuring the **Top 4 clients** with live project previews, tags, and a prominent `"SEE MORE WORK"` transition button to `/work`. |
| **`Services`** | [`components/Services.tsx`](components/Services.tsx) | Comprehensive service catalog covering Web Development, UI/UX Design, Software Engineering, Mobile Applications, and E-Commerce. |
| **`TrustedCompanies`** | [`components/TrustedCompanies.tsx`](components/TrustedCompanies.tsx) | Grid of enterprise client partners with sleek monochrome-to-color hover reveals. |
| **`Process`** | [`components/Process.tsx`](components/Process.tsx) | Visual breakdown of the 3-Layer engagement lifecycle (Foundation ➔ Engineering ➔ Deployment). |
| **`Industries`** | [`components/Industries.tsx`](components/Industries.tsx) | Domain vertical expertise matrix: Healthcare, E-Commerce, Logistics & Freight, Real Estate & PropTech, EdTech, and FinTech. |
| **`TechTicker`** | [`components/TechTicker.tsx`](components/TechTicker.tsx) | Smooth infinite marquee ticker displaying cutting-edge tools and languages (Next.js, React, TypeScript, Python, AWS, Docker, Tailwind). |
| **`Stats`** | [`components/Stats.tsx`](components/Stats.tsx) | Studio achievements and reliability metrics (e.g., 99.8% uptime, 50+ projects shipped, global client retention). |
| **`About`** | [`components/About.tsx`](components/About.tsx) | Studio history, engineering philosophy, and values bridging aesthetics with enterprise reliability. |
| **`Testimonials`** | [`components/Testimonials.tsx`](components/Testimonials.tsx) | Verified client reviews, quotes, and delivery feedback. |
| **`HomeCta`** | [`components/HomeCta.tsx`](components/HomeCta.tsx) | Pre-footer high-conversion banner directing users to start their next project. |
| **`Contact`** | [`components/Contact.tsx`](components/Contact.tsx) | Full project inquiry form with budget selectors, scope filters, and direct studio contacts. |
| **`Footer`** | [`components/Footer.tsx`](components/Footer.tsx) | Editorial dark footer featuring the colossal `THE THREE LAYERS` typographic watermark, page index, social links, and Surat, India coordinates. |

---

## 📂 Project Directory Structure

```plaintext
the-three-layers/
├── app/                                # Next.js App Router root
│   ├── contact/
│   │   └── page.tsx                    # Dedicated /contact page
│   ├── work/
│   │   └── page.tsx                    # Dedicated /work portfolio archive
│   ├── favicon.ico                     # Browser icon
│   ├── globals.css                     # Global styles, brutalist utilities & cursor CSS
│   ├── layout.tsx                      # Root layout, Google Fonts & custom cursor mount
│   └── page.tsx                        # Homepage composition
│
├── components/                         # Reusable UI & section components
│   ├── About.tsx                       # Studio story & mission
│   ├── Contact.tsx                     # Inquiry form & studio details
│   ├── Cursor.tsx                      # Custom brutalist dual cursor system
│   ├── Footer.tsx                      # Colossal watermark footer & directory links
│   ├── Hero.tsx                        # Hero banner & interactive matrix
│   ├── HomeCta.tsx                     # Conversion action banner
│   ├── Industries.tsx                  # Domain verticals breakdown
│   ├── Navbar.tsx                      # Header navigation & mobile menu
│   ├── Process.tsx                     # 3-Layer delivery methodology
│   ├── Services.tsx                    # Core agency service offerings
│   ├── Stats.tsx                       # Key performance metrics
│   ├── TechTicker.tsx                  # Infinite marquee tech stack ticker
│   ├── Testimonials.tsx                # Client feedback & endorsements
│   ├── TrustedCompanies.tsx            # Partner client logo grid with hover reveals
│   └── Work.tsx                        # Homepage top 4 featured projects showcase
│
├── lib/                                # Utilities & data helpers
│   └── clientLinks.ts                  # Dynamic store resolver for mobile & web apps
│
├── public/                             # Static assets
│   ├── image/                          # Project screenshots & partner client logos
│   │   ├── Al-Buraq_Samples.jpg
│   │   ├── Altius-website.png
│   │   ├── Jenils_sabras_masala_website.png
│   │   ├── T3L_logo_8K_transparent.png
│   │   ├── company1.png & company1-color.png
│   │   ├── gurukripaenterprise.com_.png
│   │   ├── hero-building.jpg
│   │   └── www.hmconsultech.com_.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .gitignore                          # Git exclusions
├── eslint.config.mjs                   # ESLint flat config
├── next.config.ts                      # Next.js configuration
├── package.json                        # Node dependencies & run scripts
├── postcss.config.mjs                  # PostCSS plugins
├── README.md                           # Project documentation (this file)
└── tsconfig.json                       # TypeScript compiler configuration
```

---

## 🎨 Design System & Aesthetics

The Three Layers features an uncompromising **editorial brutalist design aesthetic**:

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Warm Paper Canvas** | `#F3F0E9` | Primary background evoking architectural blueprints and editorial broadsheets. |
| **Obsidian Dark** | `#0A0A0A` | Deep charcoal used for high-contrast dark sections, footer, and crisp borders. |
| **Cadmium Orange Accent** | `#DE3D1C` | High-energy highlight used for custom cursor, badges, hover states, and CTAs. |
| **Subtle Grid Borders** | `rgba(10,10,10,0.15)` | Strict geometric grid layouts reminiscent of Swiss modernist graphic design. |

### 🔤 Typography

- **Display Headline:** `Bebas Neue` (uppercase, architectural presence, letter-spaced)
- **Subheadings & Accents:** `Space Grotesk` (contemporary modernist sans-serif)
- **Body & Copy:** `Inter` (neutral, ultra-legible digital typography)
- **Technical & Stats:** `JetBrains Mono` (monospace precision for tags, metrics, and labels)

### 🖱️ Custom Cursor Experience

The site features an interactive cursor tailored for desktop screens:
- Standard OS pointer is suppressed across all fine-pointer devices.
- **Center Dot:** Zero-latency instantaneous response (`#DE3D1C`).
- **Outer Ring:** Spring-interpolated follower with smooth physics.
- **Interactive Expansion:** Automatically scales over links, buttons, and cards to indicate clickability.

---

## 💼 Featured Client Projects in the Archive

| Client Project | Category | Tech Stack | Live Link |
| :--- | :--- | :--- | :--- |
| **Jenil's Sabras Masala** | E-Commerce | Shopify Plus, React, Tailwind CSS | [Visit Store](https://jenilsmasala.com/) |
| **Alburaq** | Mobile App | Flutter, iOS, Android, REST API | [App Store Link](https://apps.apple.com/us/app/al-buraq/) |
| **Altius Education INC.** | Web Application | Next.js, Role-Based Auth, Admin Dashboard | [Visit Portal](https://www.altiuseducation.ca/) |
| **HM Consultant** | Consulting Platform | Next.js, React, Framer Motion | [Visit Site](https://www.hmconsultech.com/) |
| **Gurukrupa Enterprise** | Corporate Platform | Next.js 15, TypeScript, Tailwind | [Visit Site](https://gurukripaenterprise.com/) |

---

## ⚡ Tech Stack & Libraries

- **Framework:** [Next.js 16.2](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **Library:** [React 19.2](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Animation:** [Framer Motion 12.4](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Linting:** [ESLint 9](https://eslint.org/)

---

## 🚀 Quickstart & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/the-three-layers.git
cd the-three-layers
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the local development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production

```bash
npm run build
npm run start
```

### 5. Run Linter

```bash
npm run lint
```

---

## 📍 Studio Information

- **Studio:** The Three Layers
- **Focus:** Digital Product Studio & Web Engineering Systems
- **Location:** Surat, Gujarat, India
- **Deliverables:** High-Performance Websites, Custom Web Apps, Enterprise Architectures, E-Commerce Solutions

---

<div align="center">

© 2026 **THE THREE LAYERS**. All rights reserved.  
*IDEAS. CODE. IMPACT.*

</div>
