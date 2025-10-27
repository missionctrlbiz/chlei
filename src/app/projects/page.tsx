import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Projects - CLHEI' }

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
        <main className="container py-8">
            <h1>Projects</h1>
            <p>Explore our projects by sector.</p>

            <div className="row">
                {projects.map((p) => (
                    <div key={p.slug} className="col-lg-4 col-md-6 mb-4">
                        <div className="vl-service-single-box p-4">
                            <h3 className="title"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
