import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Partners - CHLEI',
    description: 'Working with partners across government, civil society, international agencies and private sector.'
}

export default function Partners() {
    return (
        <>
            <Breadcrumb
                title="Our Partners"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Partners', active: true }
                ]}
            />

            <section className="vl-partners-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Partnerships</h5>
                                <h2 className="title">Our Partners</h2>
                                <p>CHLEI works with a wide range of partners across government, civil society, international agencies and private sector to deliver sustainable development outcomes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-content-box">
                                <h3 className="subtitle mb-30">Partner Types</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> International agencies and donors</li>
                                    <li><i className="fa-solid fa-check"></i> Local and national government</li>
                                    <li><i className="fa-solid fa-check"></i> Community-based organizations</li>
                                    <li><i className="fa-solid fa-check"></i> Private sector and universities</li>
                                </ul>

                                <div className="vl-btn-area">
                                    <Link href="/thematics" className="header-btn1">
                                        See Our Thematic Areas <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/contact" className="header-btn1 ms-3">
                                        Partner With Us <i className="fa-solid fa-arrow-right"></i>
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
