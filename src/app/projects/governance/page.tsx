import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Governance - Projects - CHLEI',
    description: 'Promoting good governance, participation and accountability, fostering women & youth participation in leadership.'
}

export default function ProjectsGovernance() {
    return (
        <>
            <Breadcrumb
                title="Governance Projects"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Governance', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Governance Projects</h2>
                                <p className="mb-40">
                                    Promoting Good Governance, Participation and Accountability and fostering Women & Youth Participation in Leadership.
                                </p>

                                <h3 className="subtitle mb-20">Key Initiatives</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Policy and legislative advocacy</li>
                                    <li><i className="fa-solid fa-check"></i> Women & youth political empowerment</li>
                                    <li><i className="fa-solid fa-check"></i> Local governance strengthening</li>
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
