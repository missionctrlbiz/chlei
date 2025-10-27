import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Environment & Climate Change - CHLEI',
    description: 'Mitigation, adaptation, climate justice, renewable energy and natural resource management projects.'
}

export default function Environment() {
    return (
        <>
            <Breadcrumb
                title="Environment & Climate Change"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Environment & Climate', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Environment & Climate Change</h2>
                                <p className="mb-40">
                                    Work on mitigation, adaptation, climate justice, renewable energy and natural resource management.
                                </p>

                                <h3 className="subtitle mb-20">Project Areas</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Mitigation and adaptation projects</li>
                                    <li><i className="fa-solid fa-check"></i> Renewable energy and WASH</li>
                                    <li><i className="fa-solid fa-check"></i> Bio-diversity conservation and natural resource management</li>
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
