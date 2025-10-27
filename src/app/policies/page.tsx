import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Policies - CLHEI' }

export default function Policies() {
    return (
        <main className="container py-8">
            <h1>CLHEI Policies</h1>
            <p>Our policies govern program implementation, safeguarding, data protection, and partnerships. Visit this page for downloadable policy documents and guidance.</p>

            <ul>
                <li><Link href="#">Safeguarding Policy</Link></li>
                <li><Link href="#">Data Protection & Privacy</Link></li>
                <li><Link href="#">Procurement Policy</Link></li>
            </ul>
        </main>
    )
}
