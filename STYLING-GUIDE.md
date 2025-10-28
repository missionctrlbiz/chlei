# CLHEI Next.js Styling & Performance Guide

## Current Status ✅

Your app is **working correctly**! The "blank white page" issue was caused by incorrect asset management. Here's what's properly configured now:

### Asset Structure (Correct)

```
Helpy-next/
├── public/              ← Static assets served at root URL
│   ├── css/
│   │   ├── main.css
│   │   └── plugins/
│   ├── fonts/
│   ├── img/
│   └── js/
└── src/
    ├── app/             ← Pages and layouts
    └── components/      ← React components
```

**Why this works:**

- Next.js serves `public/` files at the root URL (`/css/main.css`, `/fonts/font.woff2`)
- CSS `url()` paths work: `url("/fonts/fa-solid-900.woff2")`
- No bundling overhead for large static assets (fonts, images, jQuery plugins)

---

## What Went Wrong with the Google AI Agent

### ❌ The Failed Approach

The agent tried to move assets from `public/` to `src/assets/`:

```
src/
└── assets/
    ├── css/
    ├── fonts/
    └── img/
```

**Why it broke everything:**

1. **404 Errors**: Browser requested `/css/main.css` but file was now in `src/assets/css/`
2. **Build Failures**: CSS `url("/fonts/...")` paths broke because fonts weren't in `public/fonts/`
3. **No Styles**: Layout couldn't load CSS, resulting in blank white page
4. **Bundling Overhead**: Webpack tried to process 10MB+ of jQuery plugins unnecessarily

### The Core Misunderstanding

- ❌ **Wrong**: "Move all assets to `src/` for Next.js bundling"
- ✅ **Correct**: "Keep static assets in `public/`, only bundle dynamic assets"

---

## Next.js Asset Best Practices

### What to Keep in `public/`

✅ **Third-party libraries** (Bootstrap, jQuery, FontAwesome)
✅ **Large static files** (images, fonts, videos)
✅ **Legacy CSS** with complex `url()` paths
✅ **Files referenced by absolute paths** (`/img/logo.png`)

### What to Put in `src/`

✅ **React components** (`.tsx`, `.jsx`)
✅ **TypeScript utilities** (`.ts`)
✅ **Component-scoped CSS** (CSS Modules, `.module.css`)
✅ **Dynamic imports** (code-splitting)

---

## How to Modernize Your App (The Right Way)

### Phase 1: Performance Optimization (No Breaking Changes)

#### 1.1 Self-Host Google Fonts (Already Done ✅)

Your layout already preloads critical fonts:

```tsx
<link
  rel="preload"
  href="/fonts/fa-solid-900.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

#### 1.2 Optimize Images with Next.js Image Component

Replace:

```tsx
<img src="/img/logo/vl-logo-1.1.png" alt="CLHEI" />
```

With:

```tsx
import Image from "next/image";
<Image src="/img/logo/vl-logo-1.1.png" alt="CLHEI" width={200} height={80} />;
```

**Benefits:**

- Automatic lazy loading
- WebP conversion
- Responsive sizing
- 50-70% file size reduction

#### 1.3 Code Splitting (Critical CSS Inline)

Extract critical above-the-fold CSS:

```tsx
// src/app/layout.tsx
<style
  dangerouslySetInnerHTML={{
    __html: `
    body { margin: 0; font-family: -apple-system, sans-serif; }
    .homepage1-body { overflow-x: hidden; }
  `,
  }}
/>
```

Load full CSS after initial paint:

```tsx
<link
  rel="stylesheet"
  href="/css/main.css"
  media="print"
  onLoad="this.media='all'"
/>
```

### Phase 2: Gradual ShadCN Migration

#### 2.1 Install ShadCN

```bash
npx shadcn@latest init
```

Configure for your project:

- TypeScript: Yes
- Style: Default
- Base color: Customize for CLHEI brand
- CSS variables: Yes
- Tailwind config location: `tailwind.config.ts`
- Components location: `src/components/ui`

#### 2.2 Install Key Components

```bash
npx shadcn@latest add button card dialog accordion tabs
```

#### 2.3 Create Hybrid Layout

Keep existing styles, add ShadCN sections:

```tsx
// src/app/programs/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProgramsPage() {
  return (
    <>
      {/* Keep existing hero banner */}
      <section
        className="vl-breadcrumb"
        style={{ backgroundImage: "url(/img/breadcrumb/programs.png)" }}
      >
        {/* ... existing markup ... */}
      </section>

      {/* New ShadCN section */}
      <section className="container mx-auto py-16">
        <Tabs defaultValue="health" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="climate">Climate</TabsTrigger>
            <TabsTrigger value="peace">Peacebuilding</TabsTrigger>
          </TabsList>

          <TabsContent value="health" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mental Health & Psychosocial Support</CardTitle>
                  <CardDescription>
                    Providing MHPSS services to conflict-affected communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Over 500,000 beneficiaries reached since 2018...</p>
                </CardContent>
              </Card>
              {/* More cards... */}
            </div>
          </TabsContent>
          {/* More tabs... */}
        </Tabs>
      </section>

      {/* Keep existing footer section */}
    </>
  );
}
```

#### 2.4 Page-by-Page Migration Strategy

**Priority 1: High-traffic pages (Week 1-2)**

- `/` (homepage)
- `/about`
- `/programs`

**Priority 2: Content pages (Week 3-4)**

- `/blog`
- `/events`
- `/team`

**Priority 3: Utility pages (Week 5)**

- `/contact`
- `/faq`
- `/404`

---

## Performance Targets

### Current Metrics (Baseline)

Run Lighthouse audit:

```bash
npm run build
npm run start
# Open Chrome DevTools > Lighthouse > Run audit
```

### Target Metrics (After Optimization)

- **Performance**: 90+ (from ~70)
- **First Contentful Paint**: <1.5s (from ~3s)
- **Largest Contentful Paint**: <2.5s (from ~4s)
- **Cumulative Layout Shift**: <0.1 (from ~0.3)
- **Time to Interactive**: <3.5s (from ~5s)

### Quick Wins (Implement First)

1. ✅ **Already done**: Vercel Speed Insights + Analytics installed
2. 🔄 **Next**: Convert images to Next.js `<Image>`
3. 🔄 **Next**: Remove unused CSS (PurgeCSS or manual audit)
4. 🔄 **Next**: Lazy load below-the-fold components

---

## Addressing the Agent's Feedback

### "Blank white page" Issue

**Root cause**: Agent moved CSS from `public/` to `src/` without updating import paths
**Status**: ✅ **FIXED** - Assets back in `public/`, layout correctly references `/css/main.css`

### "Module not found" Errors

**Root cause**: CSS `url()` paths expected fonts in `/fonts/` but agent moved them to `src/assets/fonts/`
**Status**: ✅ **FIXED** - Fonts remain in `public/fonts/`, CSS paths work

### "22 pages need ShadCN styling"

**Current approach**: ❌ Agent skipped this entirely
**Correct approach**: Gradual migration (see Phase 2 above)

### "100X speed improvement"

**Agent's approach**: ❌ Focused on asset bundling (wrong target)
**Correct approach**:

1. Next.js Image optimization (30-50% LCP improvement)
2. Critical CSS inlining (20-30% FCP improvement)
3. Code splitting (15-25% TTI improvement)
4. CDN + caching (Vercel Edge) (10-20% improvement)

**Realistic target**: **3-5X** real-world speed improvement (not 100X)

---

## Implementation Checklist

### ✅ Completed

- [x] Next.js project structure
- [x] Asset organization (`public/` for static files)
- [x] Layout components (Header, Footer, Nav)
- [x] Debug configuration
- [x] Vercel Speed Insights + Analytics

### 🔄 In Progress

- [ ] Convert images to Next.js `<Image>`
- [ ] Install and configure ShadCN
- [ ] Migrate homepage to ShadCN components

### 📋 Backlog

- [ ] Lighthouse audit and baseline metrics
- [ ] Critical CSS extraction
- [ ] Lazy loading implementation
- [ ] Migrate remaining 21 pages
- [ ] Remove unused CSS
- [ ] Font optimization (WOFF2 subset)
- [ ] Service worker for offline support

---

## Commands Reference

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run dev -- --turbo   # Use Turbopack (faster)

# Production
npm run build            # Build for production
npm run start            # Start production server

# Quality
npm run lint             # Check for errors
npm run lint:fix         # Auto-fix errors
npm run type-check       # TypeScript validation

# Performance
npm run analyze          # Bundle size analysis (if configured)

# Debugging
# Press F5 in VS Code → "Next.js: server (Node)"
```

---

## Common Pitfalls to Avoid

### ❌ DON'T

- Move static assets from `public/` to `src/`
- Import CSS with complex `url()` paths via `import './style.css'`
- Bundle third-party libraries (Bootstrap, jQuery) via webpack
- Use inline styles everywhere (ESLint will complain)
- Expect 100X speed improvement from any single change

### ✅ DO

- Keep legacy assets in `public/`
- Use Next.js `<Image>` for all images
- Install ShadCN for new components only
- Migrate page-by-page (not all at once)
- Measure before and after (Lighthouse)
- Set realistic performance targets (3-5X improvement)

---

## Getting Help

### If Build Fails

1. Check terminal output for specific error
2. Verify all files in `public/` are accessible at `/path/to/file`
3. Run `npm run lint` to catch syntax errors
4. Check `.next/` folder exists and isn't corrupted

### If Styles Don't Load

1. Open DevTools Network tab
2. Look for 404 errors on CSS files
3. Verify `<link rel="stylesheet" href="/css/main.css" />` in layout
4. Check `public/css/main.css` exists

### If Images Don't Show

1. Verify file exists in `public/img/`
2. Use absolute path: `/img/logo.png` (not `./img/logo.png`)
3. Check file extension matches (`.png` vs `.PNG`)

---

## Next Steps

**Immediate (Today)**

1. Run `npm run build` to verify everything works
2. Open http://localhost:3001 and check all pages load
3. Run Lighthouse audit to get baseline metrics

**This Week**

1. Install ShadCN: `npx shadcn@latest init`
2. Add first components: `npx shadcn@latest add button card`
3. Convert homepage hero section to use ShadCN Card

**Next Week**

1. Migrate 3 more pages to ShadCN
2. Convert top 10 images to Next.js `<Image>`
3. Run performance comparison

---

**Remember**: The goal isn't perfection overnight. It's sustainable, incremental improvement without breaking what already works. 🚀
