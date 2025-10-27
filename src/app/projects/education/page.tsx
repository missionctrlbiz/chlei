import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Education - CLHEI' }

export default function Education() {
    return (
        <main className="container py-8">
            <h1>Education</h1>
            <p>Providing equal access to quality education, skills and vocational training and eliminating gender disparities.</p>
            <ul>
                <li>Gender transformative education</li>
                <li>Safe schools and education-in-emergencies</li>
                <li>Skills and vocational training</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
