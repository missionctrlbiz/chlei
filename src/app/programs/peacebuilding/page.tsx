import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Peacebuilding - CHLEI',
    description: 'Conflict prevention, transformation, and social cohesion programs promoting peaceful and inclusive societies.'
}

export default function Peacebuilding() {
    return (
        <>
            <Breadcrumb
                title="Peacebuilding"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', href: '/programs' },
                    { label: 'Peacebuilding', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Peacebuilding</h2>
                                <p className="mb-40">
                                    We promote peaceful and inclusive societies through conflict prevention, transformation and interventions that support social cohesion and access to justice.
                                </p>

                                <h3 className="subtitle mb-20">Activities</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Conflict prevention & transformation</li>
                                    <li><i className="fa-solid fa-check"></i> Community mediation and dialogue</li>
                                    <li><i className="fa-solid fa-check"></i> Peace education and youth engagement</li>
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
