import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Our Team - CLHEI' }

export default function Team() {
    return (
        <main className="container py-8">
            <h1>CLHEI Team</h1>
            <p>Meet the people driving our mission: board members, management, and field teams working across programs and geographies.</p>

            <h3>Leadership</h3>
            <p>Details about the CLHEI Board Members and Management Team will be published here.</p>

            <div className="mt-6">
                <Link href="/about" className="header-btn1">About CLHEI</Link>
            </div>
        </main>
    )
}
