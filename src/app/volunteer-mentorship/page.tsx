import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Volunteer & Mentorship - CHLEI',
    description: 'Join our volunteer programs or apply for mentorship opportunities supporting youth engagement and skills development.'
}

export default function VolunteerMentorship() {
    return (
        <>
            <Breadcrumb
                title="Volunteer & Mentorship"
                backgroundImage="/img/breadcrumb/vl-volunteers-bg.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Volunteer & Mentorship', active: true }
                ]}
            />

            <section className="vl-volunteer-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Get Involved</h5>
                                <h2 className="title">Volunteer & Mentorship</h2>
                                <p>Join our volunteer programs or apply for mentorship opportunities with CHLEI. We support youth engagement, internships and skills development.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-content-box">
                                <h3 className="subtitle mb-30">Ways to Engage</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Volunteer in the field</li>
                                    <li><i className="fa-solid fa-check"></i> Mentorship and internships</li>
                                    <li><i className="fa-solid fa-check"></i> Capacity building and training</li>
                                </ul>

                                <div className="vl-btn-area">
                                    <Link href="/contact" className="header-btn1">
                                        Contact Us to Get Involved <i className="fa-solid fa-arrow-right"></i>
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
