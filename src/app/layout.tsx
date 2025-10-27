import type { Metadata } from 'next'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Loader from '@/components/layout/Loader'
import HeaderStrip from '@/components/layout/HeaderStrip'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/layout/BackToTop'
import ClientPlugins from '@/components/ClientPlugins'

export const metadata: Metadata = {
    title: 'CLHEI - Community Links Health, Education, and Infrastructure',
    description: 'Empowering communities through sustainable development, climate action, and inclusive governance since 2006.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Preload critical fonts */}
                <link rel="preload" href="/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

                {/* Favicon */}
                {/* Prefer public-hosted communitylinks favicon first, fall back to bundled fav */}
                <link rel="shortcut icon" type="image/png" href="https://communitylinks.org.ng/wp-content/uploads/2024/06/community-link-logo2.png" />
                <link rel="shortcut icon" type="image/png" href="/img/logo/fav-logo1.png" />

                {/* Plugin CSS - Load in correct order */}
                <link rel="stylesheet" href="/css/plugins/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/plugins/fontawesome.css" />
                <link rel="stylesheet" href="/css/plugins/aos.css" />
                <link rel="stylesheet" href="/css/plugins/mobile.css" />
                <link rel="stylesheet" href="/css/plugins/nice-select.css" />
                <link rel="stylesheet" href="/css/plugins/owlcarousel.min.css" />
                <link rel="stylesheet" href="/css/plugins/slick-slider.css" />
                <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
                <link rel="stylesheet" href="/css/plugins/lightbox.css" />
                <link rel="stylesheet" href="/css/plugins/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/css/plugins/sidebar.css" />

                {/* Main theme CSS */}
                <link rel="stylesheet" href="/css/main.css" />
            </head>
            <body className="homepage1-body">
                <Loader />
                <HeaderStrip />
                <NavBar />

                {children}

                <Footer />
                <BackToTop />

                {/* Core plugins - vanilla JS only, no jQuery */}
                <Script src="/js/plugins/aos.js" strategy="afterInteractive" />
                <Script src="/js/plugins/gsap.min.js" strategy="afterInteractive" />
                <Script src="/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
                <Script src="/js/init.js" strategy="afterInteractive" />

                {/* Client-side plugin re-initialization on route changes */}
                <ClientPlugins />
                
                {/* Vercel Speed Insights */}
                <SpeedInsights />
                
                {/* Vercel Analytics */}
                <Analytics />
            </body>
        </html>
    )
}
