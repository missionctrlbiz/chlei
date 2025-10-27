import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Climate Action - CHLEI',
    description: 'Climate mitigation, adaptation, renewable energy, and natural resource management programs.'
}

export default function ClimateAction() {
    return (
        <>
            <Breadcrumb
                title="Climate Action"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', href: '/programs' },
                    { label: 'Climate Action', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Climate Action</h2>
                                <p className="mb-40">
                                    Our climate action work focuses on mitigation, adaptation, renewable energy, natural resource management and climate justice. We support communities with regenerative agriculture and biodiversity conservation.
                                </p>

                                <h3 className="subtitle mb-20">Key Activities</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Mitigation & Adaptation projects</li>
                                    <li><i className="fa-solid fa-check"></i> Renewable energy initiatives</li>
                                    <li><i className="fa-solid fa-check"></i> Natural resource management support</li>
                                    <li><i className="fa-solid fa-check"></i> Capacity building for climate resilience</li>
                                </ul>

                                <div className="vl-btn-area">
                                    <Link href="/programs" className="header-btn1">
                                        <i className="fa-solid fa-arrow-left"></i> Back to Programs
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
