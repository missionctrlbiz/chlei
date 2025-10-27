import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Volunteer & Mentorship - CLHEI' }

export default function VolunteerMentorship() {
    return (
        <main className="container py-8">
            <h1>Volunteer & Mentorship</h1>
            <p>Join our volunteer programs or apply for mentorship opportunities with CLHEI. We support youth engagement, internships and skills development.</p>

            <h3>Ways to engage</h3>
            <ul>
                <li>Volunteer in the field</li>
                <li>Mentorship and internships</li>
                <li>Capacity building and training</li>
            </ul>

            <div className="mt-6">
                <Link href="/contact" className="header-btn1">Contact Us to Get Involved</Link>
            </div>
        </main>
    )
}
