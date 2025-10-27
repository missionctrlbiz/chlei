import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'FAQ - CHLEI',
    description: 'Frequently asked questions about CHLEI, how to engage, donate, or partner with us.'
}

export default function FAQ() {
    return (
        <>
            <Breadcrumb
                title="Frequently Asked Questions"
                backgroundImage="/img/breadcrumb/vl-faq-bg.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'FAQ', active: true }
                ]}
            />

            <section className="vl-faq-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">FAQ</h5>
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p>General questions about CHLEI, how to engage, donate, or partner with us.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="vl-faq-content">
                                <div className="vl-faq-item mb-30">
                                    <h3 className="subtitle">How can I support CHLEI?</h3>
                                    <p>You can donate via the Donate page, volunteer, or partner with our programs.</p>
                                </div>

                                <div className="vl-faq-item mb-30">
                                    <h3 className="subtitle">Where are you based?</h3>
                                    <p>Our contact address: No. 2 Gordon Esa Street Ankpa Quarters Makurdi. Phone: +2347037724378</p>
                                </div>

                                <div className="vl-btn-area text-center mt-50">
                                    <Link href="/contact" className="header-btn1">
                                        Contact Us <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
