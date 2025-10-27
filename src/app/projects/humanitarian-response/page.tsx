import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Humanitarian Response - CHLEI',
    description: 'Emergency preparedness and response, early recovery, social support and rehabilitation to vulnerable populations.'
}

export default function HumanitarianResponse() {
    return (
        <>
            <Breadcrumb
                title="Humanitarian Response"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Humanitarian Response', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Humanitarian Response</h2>
                                <p className="mb-40">
                                    Emergency preparedness and response, early recovery, social support and rehabilitation to vulnerable populations.
                                </p>

                                <h3 className="subtitle mb-20">Response Areas</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Emergency preparedness and response</li>
                                    <li><i className="fa-solid fa-check"></i> Early recovery and social support</li>
                                    <li><i className="fa-solid fa-check"></i> Protection and rehabilitation</li>
                                </ul>

                                <div className="vl-btn-area">
                                    <Link href="/projects" className="header-btn1">
                                        <i className="fa-solid fa-arrow-left"></i> Back to Projects
                                    </Link>
                                    <Link href="/contact" className="header-btn1 ms-3">
                                        Get Involved <i className="fa-solid fa-arrow-right"></i>
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
