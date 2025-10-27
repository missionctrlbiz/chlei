import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = { 
    title: 'Agriculture - CHLEI',
    description: 'Promoting regenerative and sustainable agricultural practices to improve food security and livelihoods.'
}

export default function Agriculture() {
    return (
        <>
            <Breadcrumb 
                title="Agriculture"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Agriculture', active: true }
                ]}
            />

            <section className="vl-service-details-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-service-details-content">
                                <h2 className="title mb-30">Agriculture Projects</h2>
                                <p className="mb-40">Promoting regenerative and sustainable agricultural practices to improve food security and livelihoods.</p>

                                <h3 className="subtitle mb-20">Key Activities</h3>
                                <ul className="vl-list mb-40">
                                    <li><i className="fa-solid fa-check"></i> Regenerative agriculture training</li>
                                    <li><i className="fa-solid fa-check"></i> Farmer field schools and demo plots</li>
                                    <li><i className="fa-solid fa-check"></i> Market linkages and value chains</li>
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
