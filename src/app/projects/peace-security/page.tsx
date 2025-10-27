import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Peace & Security - CLHEI' }

export default function PeaceSecurity() {
    return (
        <main className="container py-8">
            <h1>Peace & Security</h1>
            <p>Conflict prevention & transformation, countering violent extremism, and community peace-building activities.</p>
            <ul>
                <li>Conflict prevention and transformation</li>
                <li>Community dialogues and mediation</li>
                <li>Youth engagement for peace</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
