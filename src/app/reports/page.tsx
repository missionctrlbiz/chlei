import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Reports - CLHEI' }

export default function Reports() {
    return (
        <main className="container py-8">
            <h1>Reports & Publications</h1>
            <p>Access our strategic plans, annual reports and research publications here.</p>

            <ul>
                <li><Link href="#">Strategic Plan</Link></li>
                <li><Link href="#">Annual Report</Link></li>
                <li><Link href="#">Research & Publications</Link></li>
            </ul>
        </main>
    )
}
