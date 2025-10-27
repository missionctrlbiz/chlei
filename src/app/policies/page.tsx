import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Policies - CHLEI',
    description: 'Our policies governing program implementation, safeguarding, data protection, and partnerships.'
}

export default function Policies() {
    return (
        <>
            <Breadcrumb
                title="CHLEI Policies"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Policies', active: true }
                ]}
            />

            <section className="vl-policies-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Governance</h5>
                                <h2 className="title">CHLEI Policies</h2>
                                <p>Our policies govern program implementation, safeguarding, data protection, and partnerships. Visit this page for downloadable policy documents and guidance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="vl-policies-list">
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Safeguarding Policy</Link></li>
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Data Protection & Privacy</Link></li>
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Procurement Policy</Link></li>
                                </ul>

                                <div className="vl-btn-area text-center">
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
