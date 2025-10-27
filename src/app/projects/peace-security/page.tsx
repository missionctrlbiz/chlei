import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Peace & Security - CHLEI',
    description: 'Conflict prevention & transformation, countering violent extremism, and community peace-building activities.'
}

export default function PeaceSecurity() {
    return (
        <>
            <Breadcrumb
                title="Peace & Security"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Peace & Security', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Peace & Security</h2>
                                <p className="mb-40">
                                    Conflict prevention & transformation, countering violent extremism, and community peace-building activities.
                                </p>

                                <h3 className="subtitle mb-20">Peace Initiatives</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Conflict prevention and transformation</li>
                                    <li><i className="fa-solid fa-check"></i> Community dialogues and mediation</li>
                                    <li><i className="fa-solid fa-check"></i> Youth engagement for peace</li>
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
