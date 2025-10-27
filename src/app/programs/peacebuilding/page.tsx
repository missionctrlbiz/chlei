import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Peacebuilding - CLHEI' }

export default function Peacebuilding() {
    return (
        <main className="container py-8">
            <h1>Peacebuilding</h1>
            <p>
                We promote peaceful and inclusive societies through conflict prevention, transformation and interventions that support social cohesion and access to justice.
            </p>

            <h3>Activities</h3>
            <ul>
                <li>Conflict prevention & transformation</li>
                <li>Community mediation and dialogue</li>
                <li>Peace education and youth engagement</li>
            </ul>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">Back to Programs</Link>
            </div>
        </main>
    )
}
