import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Reports - CHLEI',
    description: 'Access our strategic plans, annual reports and research publications.'
}

export default function Reports() {
    return (
        <>
            <Breadcrumb
                title="Reports & Publications"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Reports', active: true }
                ]}
            />

            <section className="vl-reports-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Resources</h5>
                                <h2 className="title">Reports & Publications</h2>
                                <p>Access our strategic plans, annual reports and research publications here.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="vl-reports-list">
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Strategic Plan</Link></li>
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Annual Report</Link></li>
                                    <li><i className="fa-solid fa-file-pdf"></i> <Link href="#">Research & Publications</Link></li>
                                </ul>

                                <div className="vl-btn-area text-center">
                                    <Link href="/impact" className="header-btn1">
                                        See Our Impact <i className="fa-solid fa-arrow-right"></i>
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
