import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Livelihood & Food Security - CLHEI' }

export default function Livelihood() {
    return (
        <main className="container py-8">
            <h1>Livelihood & Food Security</h1>
            <p>
                We support livelihoods through sustainable agriculture, income-generation activities, and food security programs to strengthen community resilience.
            </p>

            <h3>Focus areas</h3>
            <ul>
                <li>Regenerative & sustainable agricultural practices</li>
                <li>Community revolving funds and economic empowerment</li>
                <li>Food security and market access</li>
            </ul>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">Back to Programs</Link>
            </div>
        </main>
    )
}
