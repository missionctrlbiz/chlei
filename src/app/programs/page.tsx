import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Programs - CHLEI',
    description: 'Comprehensive programs addressing critical needs in communities across Nigeria.'
}

const programList = [
    { slug: 'climate-action', title: 'Climate Action' },
    { slug: 'livelihood', title: 'Livelihood & Food Security' },
    { slug: 'peacebuilding', title: 'Peacebuilding' },
    { slug: 'mental-health', title: 'Mental Health' },
    { slug: 'governance', title: 'Governance' },
]

export default function Programs() {
    return (
        <>
            <Breadcrumb
                title="Our Programs"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Programs', active: true }
                ]}
            />

            <section className="vl-service-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">What We Do</h5>
                                <h2 className="title">Comprehensive Programs Addressing Critical Needs</h2>
                                <p>Our integrated approach addresses the root causes of challenges facing communities across Nigeria, creating sustainable solutions for lasting impact.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {programList.map((p) => (
                            <div key={p.slug} className="col-lg-4 col-md-6 mb-30">
                                <div className="vl-service-single-box">
                                    <div className="vl-service-content">
                                        <h3 className="title"><Link href={`/programs/${p.slug}`}>{p.title}</Link></h3>
                                        <p>Learn more about our {p.title} program and how we're creating lasting change in communities.</p>
                                        <Link href={`/programs/${p.slug}`} className="read-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
