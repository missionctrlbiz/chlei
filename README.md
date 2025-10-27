# CLHEI Website - Next.js Migration

This is the Next.js + TypeScript conversion of the CLHEI (Community Links Health, Education, and Infrastructure) website, migrated from ASP.NET Razor Pages.

## About CLHEI

Community Links Health, Education, and Infrastructure (CLHEI) is an NGO founded in 2006, working across North Central and North East Nigeria. With ECOSOC status and UNFCCC Observer Status, CLHEI has impacted over 300 communities and 9,000,000 lives through interventions in:

- Livelihood and Food Security
- Climate Change and Environment
- Governance
- Peacebuilding and Conflict Transformation
- Women & Youth Economic Empowerment
- Mental Health and Psychosocial Support

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Existing CSS framework (Bootstrap 5 based)
- **UI Components:** Migrated from ASP.NET Razor partials to React components

## Project Structure

```
Helpy-next/
├── public/                 # Static assets (copied from wwwroot)
│   ├── css/               # Theme CSS and plugins
│   ├── js/                # jQuery, plugins, and custom scripts
│   ├── img/               # Images organized by section
│   └── fonts/             # Web fonts
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout with CSS/JS includes
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   └── ...            # Other pages
│   ├── components/
│   │   └── layout/        # Reusable layout components
│   │       ├── NavBar.tsx
│   │       ├── Header Strip.tsx
│   │       ├── Footer.tsx
│   │       ├── Loader.tsx
│   │       └── BackToTop.tsx
│   └── lib/
│       ├── navigation.ts  # Navigation configuration
│       └── content.ts     # Organization content and data
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   cd Helpy-next
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Troubleshooting

### jQuery Plugin Errors

If you see errors like `$(...).magnificPopup is not a function` or `$(...).owlCarousel is not a function`:

1. **Check browser console** - jQuery should load first, then plugins
2. **Clear browser cache** - Hard refresh with Ctrl+Shift+R
3. **Verify plugin files exist** in `public/js/plugins/`:
   - `jquery-3.7.1.min.js`
   - `magnific-popup.js`
   - `owlcarousel.min.js`
4. **Check network tab** - All scripts should return 200 status

The `ClientPlugins` component automatically re-initializes plugins on page navigation.

### C# Dev Kit Extension

If VS Code prompted you to install C# Dev Kit (for the ASP.NET project):

- **Not needed** for Next.js development
- **Disable it**: Extensions → C# Dev Kit → Disable (Workspace)
- **Or**: Open only the Helpy-next folder (File → Open Folder)

### Terminal Profile Issues

If your terminal changed after installing C# tools:

- Press Ctrl+Shift+P → "Terminal: Select Default Profile" → Choose "PowerShell"
- Then Ctrl+Shift+P → "Terminal: Create New Terminal"

## Features

✅ **Completed:**

- Full Next.js App Router structure with TypeScript
- All assets migrated from ASP.NET wwwroot
- Responsive navigation with mobile menu
- Homepage with hero, about, values, programs, and impact sections
- About page with full organization story and credentials
- Reusable layout components (Header, Footer, Nav, Loader)
- CLHEI-specific content and branding

🚧 **To Do:**

- Contact page with form functionality
- Blog/News section
- Program detail pages
- Team page
- FAQ page
- Image optimization with Next.js `<Image>`
- Replace jQuery plugins with React alternatives (optional)
- Add Tailwind CSS (optional, for new components only)

## Content Management

Organization content is centralized in `src/lib/content.ts`:

- Organization information and history
- Core values
- Strategic objectives
- Program areas
- Impact statistics

Navigation links are managed in `src/lib/navigation.ts`.

## Asset Handling

- **CSS:** Loaded via `<link>` tags in `layout.tsx` (preserves original theme behavior)
- **JS:** Loaded via Next.js `<Script>` with `afterInteractive` strategy
- **Images:** Currently served from `/public/img/` as static assets
- **Fonts:** Preloaded in document head for performance

## Migration Notes

This project preserves the exact look-and-feel of the original template by:

- Reusing all existing CSS/JS assets without modification
- Maintaining identical HTML structure (converted to JSX)
- Keeping jQuery-based interactions initially for compatibility
- Using the same Bootstrap 5 classes and components

## Development

- **Linting:** `npm run lint`
- **Type checking:** Runs automatically during build

## Contact

For more information about CLHEI:

- Website: https://communitylinks.org.ng/
- Email: info@communitylinks.org.ng

---

© 2025 CLHEI. All Rights Reserved.
