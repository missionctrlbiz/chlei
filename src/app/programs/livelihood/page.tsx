import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Livelihood & Food Security - CHLEI',
    description: 'Sustainable agriculture, income-generation, and food security programs strengthening community resilience.'
}

export default function Livelihood() {
    return (
        <>
            <Breadcrumb
                title="Livelihood & Food Security"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', href: '/programs' },
                    { label: 'Livelihood & Food Security', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Livelihood & Food Security</h2>
                                <p className="mb-40">
                                    We support livelihoods through sustainable agriculture, income-generation activities, and food security programs to strengthen community resilience.
                                </p>

                                <h3 className="subtitle mb-20">Focus Areas</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Regenerative & sustainable agricultural practices</li>
                                    <li><i className="fa-solid fa-check"></i> Community revolving funds and economic empowerment</li>
                                    <li><i className="fa-solid fa-check"></i> Food security and market access</li>
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
