import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Our Team - CHLEI',
    description: 'Meet the people driving our mission: board members, management, and field teams working across programs.'
}

export default function Team() {
    return (
        <>
            <Breadcrumb
                title="Our Team"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Team', active: true }
                ]}
            />

            <section className="vl-team-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Who We Are</h5>
                                <h2 className="title">CHLEI Team</h2>
                                <p>Meet the people driving our mission: board members, management, and field teams working across programs and geographies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-content-box">
                                <h3 className="subtitle mb-30">Leadership</h3>
                                <p className="mb-40">Details about the CHLEI Board Members and Management Team will be published here.</p>

                                <div className="vl-btn-area">
                                    <Link href="/about" className="header-btn1">
                                        About CHLEI <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/contact" className="header-btn1 ms-3">
                                        Contact Us <i className="fa-solid fa-arrow-right"></i>
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
