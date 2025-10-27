import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mental Health - CLHEI' }

export default function MentalHealth() {
    return (
        <main className="container py-8">
            <h1>Mental Health</h1>
            <p>
                Our mental health work includes psychosocial support, community mental health awareness, and interventions for substance abuse and wellbeing.
            </p>

            <h3>Focus</h3>
            <ul>
                <li>Mental health awareness and destigmatization</li>
                <li>Psychosocial support and counselling</li>
                <li>Substance abuse programs</li>
            </ul>

            <div className="mt-6">
                <Link href="/programs" className="header-btn1">Back to Programs</Link>
            </div>
        </main>
    )
}
