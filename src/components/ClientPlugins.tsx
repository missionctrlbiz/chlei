'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * ClientPlugins - Re-initializes vanilla JS plugins after client-side navigation
 * This ensures AOS animations work when navigating between pages
 */
export default function ClientPlugins() {
    const pathname = usePathname()

    useEffect(() => {
        // Only run in browser
        if (typeof window === 'undefined') return

        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            try {
                // Re-initialize AOS (Animate On Scroll) if available
                if (typeof (window as any).AOS !== 'undefined') {
                    (window as any).AOS.refresh()
                }

                console.log('Plugins re-initialized for:', pathname)
            } catch (error) {
                console.error('Error initializing plugins:', error)
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [pathname])

    return null
}
