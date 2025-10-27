import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Our Impact - CLHEI' }

export default function Impact() {
    return (
        <main className="container py-8">
            <h1>Our Impact</h1>
            <p>Since 2006 CLHEI have impacted over 300 communities and 9,000,000 lives positively through interventions in Livelihood, Food Security, Climate Change, Environment, Governance, Peace-building and Conflict Transformation, Women & Youth Economic Empowerment and Mental Health and Psychosocial Support.</p>

            <h3>Key metrics</h3>
            <ul>
                <li>300+ communities reached</li>
                <li>9,000,000 lives positively impacted</li>
                <li>Work across multiple states and sectors</li>
            </ul>

            <div className="mt-6">
                <Link href="/thematics" className="header-btn1">See Thematics Areas</Link>
            </div>
        </main>
    )
}
