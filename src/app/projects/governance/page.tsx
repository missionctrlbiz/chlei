import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Governance - Projects - CLHEI' }

export default function ProjectsGovernance() {
    return (
        <main className="container py-8">
            <h1>Governance Projects</h1>
            <p>Promoting Good Governance, Participation and Accountability and fostering Women & Youth Participation in Leadership.</p>
            <ul>
                <li>Policy and legislative advocacy</li>
                <li>Women & youth political empowerment</li>
                <li>Local governance strengthening</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
