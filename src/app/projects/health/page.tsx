import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Health - CHLEI',
    description: 'Enhancing access to safe, quality and affordable healthcare services focusing on nutrition, mental health, and maternal & child health.'
}

export default function Health() {
    return (
        <>
            <Breadcrumb
                title="Health Projects"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Health', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Health Projects</h2>
                                <p className="mb-40">
                                    Enhancing access to safe, quality and affordable healthcare services for all through a focus on nutrition, mental health, substance abuse and maternal & child health.
                                </p>

                                <h3 className="subtitle mb-20">Focus Areas</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Nutrition and community health</li>
                                    <li><i className="fa-solid fa-check"></i> Mental health and psychosocial support</li>
                                    <li><i className="fa-solid fa-check"></i> Maternal, newborn and child health (MNCH)</li>
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
