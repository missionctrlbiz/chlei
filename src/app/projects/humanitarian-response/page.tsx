import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Humanitarian Response - CLHEI' }

export default function HumanitarianResponse() {
    return (
        <main className="container py-8">
            <h1>Humanitarian Response</h1>
            <p>Emergency preparedness and response, early recovery, social support and rehabilitation to vulnerable populations.</p>
            <ul>
                <li>Emergency preparedness and response</li>
                <li>Early recovery and social support</li>
                <li>Protection and rehabilitation</li>
            </ul>
            <div className="mt-6"><Link href="/projects" className="header-btn1">Back to Projects</Link></div>
        </main>
    )
}
