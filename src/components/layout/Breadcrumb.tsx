import Link from 'next/image'
import Image from 'next/image'

interface BreadcrumbProps {
    title: string
    backgroundImage: string
    items: { label: string; href?: string; active?: boolean }[]
}

export default function Breadcrumb({ title, backgroundImage, items }: BreadcrumbProps) {
    return (
        <section className="vl-breadcrumb" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="shape1"><Image src="/img/breadcrumb/breadcrumb-shape-1.1.png" alt="" width={100} height={100} /></div>
            <div className="shape2"><Image src="/img/breadcrumb/breadcrumb-shape-1.2.png" alt="" width={100} height={100} /></div>
            <div className="shape2"><Image src="/img/breadcrumb/breadcrumb-shape-1.3.png" alt="" width={100} height={100} /></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="vl-breadcrumb-title">
                            <h2 className="heading">{title}</h2>
                            <div className="vl-breadcrumb-list">
                                {items.map((item, index) => (
                                    <span key={index}>
                                        {item.href ? (
                                            <Link href={item.href} className={item.active ? 'active' : ''}>
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <Link className={item.active ? 'active' : ''} href="#">
                                                {item.label}
                                            </Link>
                                        )}
                                        {index < items.length - 1 && (
                                            <span className="dvir"><i className="fa-solid fa-angle-right"></i></span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
