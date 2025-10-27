import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Partners - CLHEI' }

export default function Partners() {
    return (
        <main className="container py-8">
            <h1>Partners</h1>
            <p>CLHEI works with a wide range of partners across government, civil society, international agencies and private sector to deliver sustainable development outcomes.</p>

            <h3>Partner types</h3>
            <ul>
                <li>International agencies and donors</li>
                <li>Local and national government</li>
                <li>Community-based organizations</li>
                <li>Private sector and universities</li>
            </ul>

            <div className="mt-6">
                <Link href="/thematics" className="header-btn1">See Our Thematic Areas</Link>
            </div>
        </main>
    )
}
