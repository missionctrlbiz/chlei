import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Projects - CHLEI',
    description: 'Explore our projects by sector across agriculture, education, environment, governance, health, humanitarian response, and peace & security.'
}

const projects = [
    { slug: 'agriculture', title: 'Agriculture' },
    { slug: 'education', title: 'Education' },
    { slug: 'environment-climate-change', title: 'Environment & Climate Change' },
    { slug: 'governance', title: 'Governance' },
    { slug: 'health', title: 'Health' },
    { slug: 'humanitarian-response', title: 'Humanitarian Response' },
    { slug: 'peace-security', title: 'Peace & Security' },
]

export default function ProjectsIndex() {
    return (
        <>
            <Breadcrumb
                title="Our Projects"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects', active: true }
                ]}
            />

            <section className="vl-service-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">What We Do</h5>
                                <h2 className="title">Projects by Sector</h2>
                                <p>Explore our diverse range of projects addressing critical needs across multiple sectors in communities throughout Nigeria.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {projects.map((p) => (
                            <div key={p.slug} className="col-lg-4 col-md-6 mb-30">
                                <div className="vl-service-single-box">
                                    <div className="vl-service-content">
                                        <h3 className="title"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
                                        <Link href={`/projects/${p.slug}`} className="read-more">View Projects <i className="fa-solid fa-arrow-right"></i></Link>
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
