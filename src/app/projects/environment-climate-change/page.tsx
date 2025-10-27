import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Environment & Climate Change - CLHEI' }

export default function Environment() {
    return (
        <main className="container py-8">
            <h1>Environment & Climate Change</h1>
            <p>Work on mitigation, adaptation, climate justice, renewable energy and natural resource management.</p>
            <ul>
                <li>Mitigation and adaptation projects</li>
                <li>Renewable energy and WASH</li>
                <li>Bio-diversity conservation and natural resource management</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
