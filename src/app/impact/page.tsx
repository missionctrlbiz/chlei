import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Our Impact - CHLEI',
    description: 'Since 2006, impacting over 300 communities and 9,000,000 lives through comprehensive interventions.'
}

export default function Impact() {
    return (
        <>
            <Breadcrumb
                title="Our Impact"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Impact', active: true }
                ]}
            />

            <section className="vl-impact-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Our Impact</h5>
                                <h2 className="title">Creating Lasting Change</h2>
                                <p>Since 2006, CHLEI has impacted over 300 communities and 9,000,000 lives positively through interventions in Livelihood, Food Security, Climate Change, Environment, Governance, Peace-building and Conflict Transformation, Women & Youth Economic Empowerment and Mental Health and Psychosocial Support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-content-box">
                                <h3 className="subtitle mb-30">Key Metrics</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> 300+ communities reached</li>
                                    <li><i className="fa-solid fa-check"></i> 9,000,000 lives positively impacted</li>
                                    <li><i className="fa-solid fa-check"></i> Work across multiple states and sectors</li>
                                </ul>

                                <div className="vl-btn-area">
                                    <Link href="/thematics" className="header-btn1">
                                        See Thematics Areas <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/programs" className="header-btn1 ms-3">
                                        Our Programs <i className="fa-solid fa-arrow-right"></i>
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
