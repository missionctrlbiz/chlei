# CHLEI - Community & Health Links Empowerment Initiative# CLHEI Website - Next.js Migration



**Empowering Communities • Building Resilience • Fostering Peace**This is the Next.js + TypeScript conversion of the CLHEI (Community Links Health, Education, and Infrastructure) website, migrated from ASP.NET Razor Pages.



---## About CLHEI



## 🌍 About CHLEICommunity Links Health, Education, and Infrastructure (CLHEI) is an NGO founded in 2006, working across North Central and North East Nigeria. With ECOSOC status and UNFCCC Observer Status, CLHEI has impacted over 300 communities and 9,000,000 lives through interventions in:



Community & Health Links Empowerment Initiative (CHLEI) is a leading humanitarian and development organization founded in 2006, working across North Central and North East Nigeria. With **ECOSOC status** and **UNFCCC Observer Status**, CHLEI has impacted over **300 communities** and **9,000,000 lives** through comprehensive interventions.- Livelihood and Food Security

- Climate Change and Environment

## 🎯 Our Mission- Governance

- Peacebuilding and Conflict Transformation

To empower vulnerable communities through integrated programs that promote health, education, sustainable livelihoods, and peacebuilding, while building resilient systems that can withstand and adapt to challenges.- Women & Youth Economic Empowerment

- Mental Health and Psychosocial Support

## 💫 Our Vision

## Tech Stack

A world where every community has access to quality healthcare, education, sustainable livelihoods, and lives in peace and harmony.

- **Framework:** Next.js 15 (App Router)

## 💎 Core Values- **Language:** TypeScript

- **Styling:** Existing CSS framework (Bootstrap 5 based)

- **Compassion** - We care deeply about the well-being of those we serve- **UI Components:** Migrated from ASP.NET Razor partials to React components

- **Integrity** - We operate with transparency and accountability

- **Excellence** - We strive for the highest standards in all our work## Project Structure

- **Innovation** - We embrace creative solutions to complex challenges

- **Sustainability** - We build programs that create lasting impact```

- **Collaboration** - We partner with communities and stakeholders for greater impactHelpy-next/

├── public/                 # Static assets (copied from wwwroot)

## 🚀 Our Programs│   ├── css/               # Theme CSS and plugins

│   ├── js/                # jQuery, plugins, and custom scripts

### 🏥 Health & Mental Wellness│   ├── img/               # Images organized by section

Providing accessible healthcare services and mental health support to underserved communities through MHPSS programs and community health initiatives.│   └── fonts/             # Web fonts

├── src/

### 📚 Education & Youth Development│   ├── app/               # Next.js App Router pages

Empowering the next generation through quality education, skills development, and youth leadership programs.│   │   ├── layout.tsx     # Root layout with CSS/JS includes

│   │   ├── page.tsx       # Homepage

### 🌱 Climate Action & Environmental Sustainability│   │   ├── about/         # About page

Leading environmental conservation initiatives, promoting climate resilience, and implementing sustainable agricultural practices.│   │   └── ...            # Other pages

│   ├── components/

### 🤝 Peacebuilding & Conflict Resolution│   │   └── layout/        # Reusable layout components

Fostering dialogue, reconciliation, and sustainable peace in conflict-affected communities through evidence-based interventions.│   │       ├── NavBar.tsx

│   │       ├── Header Strip.tsx

### 💼 Livelihood & Economic Empowerment│   │       ├── Footer.tsx

Creating opportunities for sustainable income generation, women's economic empowerment, and financial inclusion.│   │       ├── Loader.tsx

│   │       └── BackToTop.tsx

### 🏛️ Governance & Civic Engagement│   └── lib/

Strengthening democratic institutions, promoting transparency, and fostering active citizenship and community participation.│       ├── navigation.ts  # Navigation configuration

│       └── content.ts     # Organization content and data

## 📊 Our Impact at a Glance└── ...config files

```

- **9M+** Lives touched through our programs

- **300+** Communities transformed## Getting Started

- **15+ years** of dedicated service

- **ECOSOC Status** with UN Economic and Social Council### Prerequisites

- **UNFCCC Observer** at Climate Change Conferences

- **Multi-sectoral** approach across 6 key program areas- Node.js 18+

- npm or yarn

## 🌟 What Makes Us Different

### Installation

CHLEI stands out through:

1. **Install dependencies:**

- **Community-Centered Approach** - We work *with* communities, not just *for* them

- **Evidence-Based Programming** - Data-driven interventions with measurable outcomes   ```bash

- **Holistic Development** - Integrated programs addressing root causes   cd Helpy-next

- **Conflict-Sensitive Practice** - Peace and security at the core of all our work   npm install

- **Strategic Partnerships** - Collaboration with UN agencies, governments, and civil society   ```

- **Climate Action Leadership** - Recognized voice in global climate conversations

2. **Run development server:**

## 🤝 Get Involved

   ```bash

### 🙋 Volunteer   npm run dev

Join our team of dedicated volunteers making real difference in communities across Nigeria.   ```



### 🤝 Partner With Us3. **Open browser:**

Collaborate on projects that create lasting impact and transform lives.   Navigate to [http://localhost:3000](http://localhost:3000)



### 💝 Donate### Build for Production

Support our mission to empower communities and build resilience for sustainable development.

```bash

### 👨‍🏫 Mentorshipnpm run build

Share your expertise and guide the next generation of changemakers and community leaders.npm run start

```

## 🛠️ Technical Stack

## Troubleshooting

This website is built with modern technologies for optimal performance and user experience:

### jQuery Plugin Errors

- **Framework**: Next.js 16 (App Router)

- **UI Library**: React 19If you see errors like `$(...).magnificPopup is not a function` or `$(...).owlCarousel is not a function`:

- **Language**: TypeScript 5

- **Styling**: Bootstrap 5 + Custom SCSS1. **Check browser console** - jQuery should load first, then plugins

- **Animations**: AOS (Animate On Scroll), GSAP, Swiper2. **Clear browser cache** - Hard refresh with Ctrl+Shift+R

- **Icons**: Iconify (comprehensive icon library)3. **Verify plugin files exist** in `public/js/plugins/`:

- **Interactive Components**: CountUp for statistics, Swiper for hero slider   - `jquery-3.7.1.min.js`

   - `magnific-popup.js`

## 🚀 Getting Started   - `owlcarousel.min.js`

4. **Check network tab** - All scripts should return 200 status

### Prerequisites

- Node.js 18+ and npmThe `ClientPlugins` component automatically re-initializes plugins on page navigation.



### Installation### C# Dev Kit Extension



```bashIf VS Code prompted you to install C# Dev Kit (for the ASP.NET project):

# Clone the repository

git clone https://github.com/missionctrlbiz/chlei.git- **Not needed** for Next.js development

cd chlei- **Disable it**: Extensions → C# Dev Kit → Disable (Workspace)

- **Or**: Open only the Helpy-next folder (File → Open Folder)

# Install dependencies

npm install### Terminal Profile Issues



# Run development serverIf your terminal changed after installing C# tools:

npm run dev

```- Press Ctrl+Shift+P → "Terminal: Select Default Profile" → Choose "PowerShell"

- Then Ctrl+Shift+P → "Terminal: Create New Terminal"

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Features

### Build for Production

✅ **Completed:**

```bash

# Create optimized production build- Full Next.js App Router structure with TypeScript

npm run build- All assets migrated from ASP.NET wwwroot

- Responsive navigation with mobile menu

# Start production server- Homepage with hero, about, values, programs, and impact sections

npm start- About page with full organization story and credentials

```- Reusable layout components (Header, Footer, Nav, Loader)

- CLHEI-specific content and branding

## 📁 Project Structure

🚧 **To Do:**

```

chlei/- Contact page with form functionality

├── src/- Blog/News section

│   ├── app/                    # Next.js App Router pages- Program detail pages

│   │   ├── layout.tsx         # Root layout with global styles- Team page

│   │   ├── page.tsx           # Homepage- FAQ page

│   │   ├── about/             # About page- Image optimization with Next.js `<Image>`

│   │   ├── programs/          # Program pages- Replace jQuery plugins with React alternatives (optional)

│   │   ├── contact/           # Contact page- Add Tailwind CSS (optional, for new components only)

│   │   └── ...

│   ├── components/            # React components## Content Management

│   │   ├── HeroSlider.tsx    # Homepage hero slider

│   │   ├── CountUp.tsx       # Animated counter componentOrganization content is centralized in `src/lib/content.ts`:

│   │   ├── layout/           # Layout components

│   │   └── ...- Organization information and history

│   └── lib/                   # Utilities and content- Core values

│       ├── navigation.ts     # Navigation configuration- Strategic objectives

│       └── content.ts        # Organization data- Program areas

├── public/                    # Static assets- Impact statistics

│   ├── css/                  # Stylesheets

│   ├── js/                   # Vanilla JS scriptsNavigation links are managed in `src/lib/navigation.ts`.

│   ├── img/                  # Images

│   └── fonts/                # Web fonts## Asset Handling

└── ...config files

```- **CSS:** Loaded via `<link>` tags in `layout.tsx` (preserves original theme behavior)

- **JS:** Loaded via Next.js `<Script>` with `afterInteractive` strategy

## 🎨 Key Features- **Images:** Currently served from `/public/img/` as static assets

- **Fonts:** Preloaded in document head for performance

✅ **Modern Stack**: Next.js 16 + React 19 + TypeScript

✅ **Responsive Design**: Mobile-first, fully responsive across all devices## Migration Notes

✅ **Performance Optimized**: Fast loading, optimized assets

✅ **SEO Ready**: Metadata, semantic HTML, crawlable pagesThis project preserves the exact look-and-feel of the original template by:

✅ **Accessibility**: WCAG compliant, keyboard navigation

✅ **Interactive Animations**: Smooth scrolling, fade-ins, counters- Reusing all existing CSS/JS assets without modification

✅ **Hero Slider**: Dynamic hero section with autoplay- Maintaining identical HTML structure (converted to JSX)

✅ **Component-Based**: Modular, reusable React components- Keeping jQuery-based interactions initially for compatibility

- Using the same Bootstrap 5 classes and components

## 📧 Contact Us

## Development

**Head Office**

- **Address**: Abuja, Nigeria- **Linting:** `npm run lint`

- **Email**: info@communitylinks.org.ng- **Type checking:** Runs automatically during build

- **Website**: [www.communitylinks.org.ng](https://communitylinks.org.ng)

## Contact

**Follow Us**

- LinkedIn: [CHLEI Nigeria](#)For more information about CLHEI:

- Twitter: [@CHLEI_NG](#)

- Facebook: [CHLEI Nigeria](#)- Website: https://communitylinks.org.ng/

- Email: info@communitylinks.org.ng

## 🙏 Acknowledgments

---

CHLEI's work is made possible through the support of our partners, donors, volunteers, and the resilient communities we serve. Special thanks to:

© 2025 CLHEI. All Rights Reserved.

- United Nations agencies (UNHCR, UNICEF, WHO, etc.)
- International and local NGO partners
- Government agencies at federal and state levels
- Community leaders and volunteers
- Individual donors and supporters

## 📄 License

Copyright © 2006-2025 Community & Health Links Empowerment Initiative (CHLEI). All rights reserved.

---

<div align="center">

**Together, we build resilient communities and create lasting change.** 🌟

*Empowering today • Transforming tomorrow*

</div>
