import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Governance - CHLEI',
    description: 'Good governance, participation, accountability, and political empowerment programs.'
}

export default function Governance() {
    return (
        <>
            <Breadcrumb
                title="Governance"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', href: '/programs' },
                    { label: 'Governance', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Governance</h2>
                                <p className="mb-40">
                                    We promote good governance, participation and accountability, with a focus on women and youth political empowerment and policy advocacy.
                                </p>

                                <h3 className="subtitle mb-20">Approach</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Policy and legislative advocacy</li>
                                    <li><i className="fa-solid fa-check"></i> Women & youth political empowerment</li>
                                    <li><i className="fa-solid fa-check"></i> Strengthening local governance structures</li>
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
