import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = { 
    title: 'Education - CHLEI',
    description: 'Equal access to quality education, skills and vocational training, eliminating gender disparities.'
}

export default function Education() {
    return (
        <>
            <Breadcrumb 
                title="Education Projects"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Education', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Education Projects</h2>
                                <p className="mb-40">
                                    Providing equal access to quality education, skills and vocational training and eliminating gender disparities.
                                </p>

                                <h3 className="subtitle mb-20">Key Focus Areas</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Gender transformative education</li>
                                    <li><i className="fa-solid fa-check"></i> Safe schools and education-in-emergencies</li>
                                    <li><i className="fa-solid fa-check"></i> Skills and vocational training</li>
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
