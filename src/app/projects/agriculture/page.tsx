import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Agriculture - CLHEI' }

export default function Agriculture() {
    return (
        <main className="container py-8">
            <h1>Agriculture</h1>
            <p>Promoting regenerative and sustainable agricultural practices to improve food security and livelihoods.</p>
            <ul>
                <li>Regenerative agriculture training</li>
                <li>Farmer field schools and demo plots</li>
                <li>Market linkages and value chains</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
