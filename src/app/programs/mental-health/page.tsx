import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Mental Health - CHLEI',
    description: 'Psychosocial support, mental health awareness, and wellbeing interventions for community health.'
}

export default function MentalHealth() {
    return (
        <>
            <Breadcrumb
                title="Mental Health"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', href: '/programs' },
                    { label: 'Mental Health', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Mental Health</h2>
                                <p className="mb-40">
                                    Our mental health work includes psychosocial support, community mental health awareness, and interventions for substance abuse and wellbeing.
                                </p>

                                <h3 className="subtitle mb-20">Focus</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Mental health awareness and destigmatization</li>
                                    <li><i className="fa-solid fa-check"></i> Psychosocial support and counselling</li>
                                    <li><i className="fa-solid fa-check"></i> Substance abuse programs</li>
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
