import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Programs - CLHEI' }

const programList = [
    { slug: 'climate-action', title: 'Climate Action' },
    { slug: 'livelihood', title: 'Livelihood & Food Security' },
    { slug: 'peacebuilding', title: 'Peacebuilding' },
    { slug: 'mental-health', title: 'Mental Health' },
    { slug: 'governance', title: 'Governance' },
]

export default function Programs() {
    return (
        <main className="container py-8">
            <h1>Our Programs</h1>
            <p>Comprehensive programs addressing critical needs in communities across Nigeria.</p>

            <div className="row">
                {programList.map((p) => (
                    <div key={p.slug} className="col-lg-4 col-md-6 mb-4">
                        <div className="vl-service-single-box p-4">
                            <h3 className="title"><Link href={`/programs/${p.slug}`}>{p.title}</Link></h3>
                            <p>Learn more about our {p.title} work and how to get involved.</p>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    )
}
