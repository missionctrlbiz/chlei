import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Climate Action - CLHEI' }

export default function ClimateAction() {
    return (
        <main className="container py-8">
            <h1>Climate Action</h1>
            <p>
                Our climate action work focuses on mitigation, adaptation, renewable energy, natural resource management and climate justice. We support communities with regenerative agriculture and biodiversity conservation.
            </p>

            <h3>Key activities</h3>
            <ul>
                <li>Mitigation & Adaptation projects</li>
                <li>Renewable energy initiatives</li>
                <li>Natural resource management support</li>
                <li>Capacity building for climate resilience</li>
            </ul>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">Back to Programs</Link>
            </div>
        </main>
    )
}
