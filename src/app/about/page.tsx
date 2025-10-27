import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - CLHEI',
    description: 'Learn about Community Links Health, Education, and Infrastructure - empowering communities since 2006.'
}

export default function AboutPage() {
    return (
        <>
            <section className="vl-breadcrumb" style={{ backgroundImage: 'url(/img/breadcrumb/vl-abuot-breadcrumb.png)' }}>
                <div className="shape1"><Image src="/img/breadcrumb/breadcrumb-shape-1.1.png" alt="" width={100} height={100} /></div>
                <div className="shape2"><Image src="/img/breadcrumb/breadcrumb-shape-1.2.png" alt="" width={100} height={100} /></div>
                <div className="shape2"><Image src="/img/breadcrumb/breadcrumb-shape-1.3.png" alt="" width={100} height={100} /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="vl-breadcrumb-title">
                                <h2 className="heading">About Us</h2>
                                <div className="vl-breadcrumb-list">
                                    <span><Link href="/">Home</Link></span>
                                    <span className="dvir"><i className="fa-solid fa-angle-right"></i></span>
                                    <span><Link className="active" href="#">About Us</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vl-about5 sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-about-content">
                                <div className="vl-section-title-1 mb-50">
                                    <h5 className="subtitle">About Us</h5>
                                    <h2 className="title">Stronger Communities An One Gift at a Time</h2>
                                    <p>Our organization is built on a simple yet powerful belief: together, we can create lasting change. Through compassion, dedication, and the generous support of our community, we work to uplift.</p>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="vl-sm-thumb mb-30">
                                            <Image className="w-100" src="/img/about/vl-about-thum-inner-sm-1.1.png" alt="CLHEI Community Work" width={600} height={400} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="vl-sm-thumb2 mb-30">
                                            <Image className="w-100" src="/img/about/vl-about-thum-inner-sm-1.2.png" alt="CLHEI Impact" width={600} height={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vl-about-content2 ml-20">
                                <div className="large-thumb mb-30">
                                    <Image className="w-100" src="/img/about/vl-about-thum-inner-large-1.3.png" alt="CLHEI Team" width={700} height={800} />
                                </div>
                                <div className="content mb-30">
                                    <p className="para">From providing essential resources to funding life-changing projects, every effort is directed toward building a better, more equitable world. By uniting individuals, businesses, and communities.</p>

                                    <div className="icon-list-box box2">
                                        <ul>
                                            <li><span><i className="fa-solid fa-check"></i></span>Join Our Mission to Make a Difference</li>
                                            <li><span><i className="fa-solid fa-check"></i></span>Transforming Lives and Communities</li>
                                            <li><span><i className="fa-solid fa-check"></i></span>Standing Up for Human Rights</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vl-about-mission-bg sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mision-thumb mb-30">
                                        <Image className="w-100" src="/img/about/vl-about-mission-thumb.png" alt="CLHEI Mission" width={600} height={500} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mission-content ml-20 mb-30">
                                        <h2 className="title pb-20">Our Mission</h2>
                                        <p className="para pb-16">We are dedicated to addressing urgent needs such as clean water, education, healthcare, and food security, ensuring that every person has the foundation.</p>
                                        <p className="para">Through targeted programs, sustainable initiatives, & the collective power of compassionate supporters, we strive to make a real and lasting impact.</p>

                                        <div className="icon-list-box pt-20">
                                            <ul>
                                                <li><span><i className="fa-solid fa-check"></i></span>Client-Focused Solutions and Results</li>
                                                <li><span><i className="fa-solid fa-check"></i></span>Flexible, Value Driven Approach</li>
                                                <li><span><i className="fa-solid fa-check"></i></span>Warning of updated legal risks for customers</li>
                                                <li><span><i className="fa-solid fa-check"></i></span>A team of experienced and highly specialized</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vl-about-vission-bg sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vission-thumb mb-30">
                                <Image className="w-100" src="/img/about/vl-vission2.png" alt="CLHEI Vision" width={600} height={500} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vl-vission-content ml-50 mb-30">
                                <div className="vl-section-title-1">
                                    <h5 className="subtitle">Our Mission & Vision</h5>
                                    <h2 className="title">Our Purpose: Mission and Vision for a Better</h2>
                                    <p>Our mission to bring hope, resources, & opportunitie communities in need, empowering individuals to build brighter, sustainable futures we are committed to tackling critical challenges.</p>
                                </div>

                                <div className="vl-vission-tab2">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Our Mission</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our Vission</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Charity History</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <p className="para">Our vision is a world where everyone has the opportunity to thrive, with access the resources and support necessary for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we work tirelessly to make this vision a reality. Together, with our supporters, partners, and volunteers, we are creating.</p>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <p className="para">Our vision is a world where everyone has the opportunity to thrive, with access the resources and support necessary for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we work tirelessly to make this vision a reality. Together, with our supporters, partners, and volunteers, we are creating.</p>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <p className="para">Our vision is a world where everyone has the opportunity to thrive, with access the resources and support necessary for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we work tirelessly to make this vision a reality. Together, with our supporters, partners, and volunteers, we are creating.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vl-counter5 counter-iner sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-counter-content mb-30">
                                <div className="vl-section-title-1">
                                    <h5 className="subtitle">Company Statistics</h5>
                                    <h2 className="title">Highest Ambition is to Help People</h2>
                                    <p className="para pb-32">Our impact is reflected in the numbers—and each statistic represents lives changed and futures improved over the past year alone.</p>

                                    <div className="btn-area">
                                        <Link href="/contact" className="header-btn1">Donate Now <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-10">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-counter-box counter-box-2">
                                        <h3 className="title"><span className="title counter">12</span>+</h3>
                                        <span className="pt-20">Years of Fundation</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-counter-box counter-box-2 active">
                                        <h3 className="title"><span className="title counter">69</span>+</h3>
                                        <span className="pt-20">Monthly Donate</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-counter-box counter-box-2">
                                        <h3 className="title"><span className="title counter">3</span>k+</h3>
                                        <span className="pt-20">Global Partners</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-counter-box counter-box-2">
                                        <h3 className="title"><span className="title counter">93</span>+</h3>
                                        <span className="pt-20">Project Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vl-cta">
                <div className="container">
                    <div className="vl-cta-bg" style={{ backgroundImage: 'url(/img/cta/vl-cta-1.1.png)' }}>
                        <div className="vl-cta-shap dot-shap">
                            <Image src="/img/shape/vl-arow-shap-1.1.png" alt="shape" width={100} height={100} />
                        </div>
                        <div className="vl-cta-shap shap-1"><Image src="/img/shape/vl-cta-1.1.png" alt="shape" width={80} height={80} /></div>
                        <div className="vl-cta-shap shap-2"><Image src="/img/shape/vl-cta-1.2.png" alt="shape" width={80} height={80} /></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="vl-cta-content text-center">
                                    <h2 className="title">Your Help Can Change Lives</h2>
                                    <p>Every action, no matter how small, can make a world of difference in the lives of those affected by disaster. Whether it&apos;s a donation.</p>
                                    <div className="vl-cta-form text-center mx-auto">
                                        <form action="#">
                                            <input type="email" placeholder="Enter Your Email.." />
                                            <div className="btn-area vl-cta-btn1">
                                                <button className="header-btn1">Subscribe <span><i className="fa-solid fa-arrow-right"></i></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
