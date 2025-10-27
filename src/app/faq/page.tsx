import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'FAQ - CLHEI' }

export default function FAQ() {
    return (
        <main className="container py-8">
            <h1>Frequently Asked Questions</h1>
            <p>General questions about CLHEI, how to engage, donate, or partner with us.</p>

            <section>
                <h3>How can I support CLHEI?</h3>
                <p>You can donate via the Donate page, volunteer, or partner with our programs.</p>
            </section>

            <section>
                <h3>Where are you based?</h3>
                <p>Our contact address: No. 2 Gordon Esa Street Ankpa Quarters Makurdi. Phone: +2347037724378</p>
            </section>

            <div className="mt-6">
                <Link href="/contact" className="header-btn1">Contact Us</Link>
            </div>
        </main>
    )
}
