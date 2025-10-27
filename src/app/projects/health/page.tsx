import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Health - CLHEI' }

export default function Health() {
    return (
        <main className="container py-8">
            <h1>Health Projects</h1>
            <p>Enhancing access to safe, quality and affordable healthcare services for all through a focus on nutrition, mental health, substance abuse and maternal & child health.</p>
            <ul>
                <li>Nutrition and community health</li>
                <li>Mental health and psychosocial support</li>
                <li>Maternal, newborn and child health (MNCH)</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
