import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Governance - CLHEI' }

export default function Governance() {
    return (
        <main className="container py-8">
            <h1>Governance</h1>
            <p>
                We promote good governance, participation and accountability, with a focus on women and youth political empowerment and policy advocacy.
            </p>

            <h3>Approach</h3>
            <ul>
                <li>Policy and legislative advocacy</li>
                <li>Women & youth political empowerment</li>
                <li>Strengthening local governance structures</li>
            </ul>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">Back to Programs</Link>
            </div>
        </main>
    )
}
