import Link from 'next/link'
import Image from 'next/image'
import AppIcon from '@/components/Icon'
import Counter from '@/components/CountUp'
import HeroSlider from '@/components/HeroSlider'
import { organizationInfo } from '@/lib/content'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
    return (
        <>
            {/* Hero Section with Swiper Slider */}
            <HeroSlider />

            {/* Impact Stats Section (moved up) */}
            <section className="vl-counter-area sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="vl-counter-single-box text-center mb-30" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300">
                                <div className="vl-counter-icon">
                                    <span><AppIcon name="mdi:calendar-check" size={40} title="Year Founded" /></span>
                                </div>
                                <div className="vl-counter-content">
                                    <h3 className="title">
                                        <Counter end={organizationInfo.impact.since} duration={2} className="counter" />
                                    </h3>
                                    <p>Year Founded</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="vl-counter-single-box text-center mb-30" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="400">
                                <div className="vl-counter-icon">
                                    <span><AppIcon name="mdi:home-group" size={40} title="Communities Impacted" /></span>
                                </div>
                                <div className="vl-counter-content">
                                    <h3 className="title">
                                        <Counter end={organizationInfo.impact.communities} duration={2.5} className="counter" />
                                    </h3>
                                    <p>Communities Impacted</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="vl-counter-single-box text-center mb-30" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500">
                                <div className="vl-counter-icon">
                                    <span><AppIcon name="mdi:account-group" size={40} title="Lives Transformed" /></span>
                                </div>
                                <div className="vl-counter-content">
                                    <h3 className="title">
                                        <Counter end={organizationInfo.impact.livesImpacted / 1000000} duration={2.5} decimals={1} suffix="M" className="counter" />
                                    </h3>
                                    <p>Lives Transformed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="vl-counter-single-box text-center mb-30" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="600">
                                <div className="vl-counter-icon">
                                    <span><AppIcon name="mdi:map-marker-multiple" size={40} title="States Covered" /></span>
                                </div>
                                <div className="vl-counter-content">
                                    <h3 className="title">
                                        <Counter end={organizationInfo.impact.states.length} duration={2} className="counter" />
                                    </h3>
                                    <p>States Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="vl-about-section sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-about-content">
                                <div className="vl-section-title-1">
                                    <h5 className="subtitle" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">About Us</h5>
                                    <h2 className="title text-anime-style-3">Where It All Began</h2>
                                    <p className="pb-32" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                                        CLHEI was founded in January 2006 and registered with the Corporate Affairs Commission in October 2010.
                                        We have ECOSOC status and Observer Status to the UNFCCC, working extensively across North Central and North East Nigeria.
                                    </p>
                                </div>
                                <div className="vl-about-grid">
                                    <div className="vl-about-icon-box mb-30">
                                        <div className="vl-about-icon">
                                            <span><AppIcon name="mdi:leaf" size={36} title="Sustainable Development" /></span>
                                        </div>
                                        <div className="vl-icon-content">
                                            <h3 className="title"><Link href="/programs">Sustainable Development</Link></h3>
                                            <p>Working with communities to effect positive change in systems and structures for lasting impact.</p>
                                        </div>
                                    </div>
                                    <div className="vl-about-icon-box mb-30">
                                        <div className="vl-about-icon">
                                            <span><AppIcon name="mdi:human-male-female-child" size={36} title="Equity and Inclusiveness" /></span>
                                        </div>
                                        <div className="vl-icon-content">
                                            <h3 className="title"><Link href="/about">Equity and Inclusiveness</Link></h3>
                                            <p>We leave no one behind. Deploying rights-based approaches for human development and empowerment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-about-large-thumb reveal">
                                <Image className="w-100" src="/img/about/vl-about-1.1.png" alt="CLHEI Impact" width={700} height={780} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-30">
                            <div className="vl-about-sm-content" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300">
                                <p>Since 2006, CLHEI has impacted over 300 communities and 9,000,000 lives through interventions in climate change, governance, and peacebuilding.</p>
                                <div className="btn-area">
                                    <Link href="/team" className="header-btn1">Join Our Team <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                                <div className="vl-about-sm-thumb d-none d-md-block">
                                    <Image className="w-100" src="/img/about/vl-about-1.2.png" alt="CLHEI team" width={420} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="vl-causes-area sp2">
                <div className="container">
                    <div className="vl-causes-section-title text-center">
                        <div className="vl-section-title-1 mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Our Values</h5>
                            <h2 className="title text-anime-style-3">CLHEI Core Values</h2>
                            <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                                Guided by principles of professionalism, transparency, and inclusiveness in everything we do.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {organizationInfo.values.map((value, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="vl-single-cause-box mb-30" data-aos="fade-right" data-aos-duration="1200" data-aos-delay={300 + (index * 100)}>
                                    <div className="vl-cause-thumb">
                                        <Image className="w-100" src={`/img/cause/vl-cause-1.${index + 1}.png`} alt={value.title} width={420} height={320} />
                                    </div>
                                    <div className="vl-cause-content">
                                        <h3 className="title"><Link href="/about">{value.title}</Link></h3>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Areas Section */}
            <section className="vl-service-area sp2">
                <div className="container">
                    <div className="vl-service-section-title text-center">
                        <div className="vl-section-title-1 mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Our Programs</h5>
                            <h2 className="title text-anime-style-3">What We Do</h2>
                            <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                                Comprehensive programs addressing critical needs in communities across Nigeria.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {(() => {
                            const icons = [
                                'mdi:sprout',
                                'mdi:food-apple',
                                'mdi:peace',
                                'mdi:head-heart',
                                'mdi:gavel',
                                'mdi:hands-pray'
                            ];
                            return organizationInfo.programAreas.map((program, index) => {
                                const icon = icons[index % icons.length];
                                return (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div className="vl-service-single-box mb-30" data-aos="fade-right" data-aos-duration="1200" data-aos-delay={300 + (index * 100)}>
                                            <div className="vl-service-icon">
                                                <span><AppIcon name={icon} size={40} title={program} /></span>
                                            </div>
                                            <div className="vl-service-content">
                                                <h3 className="title"><Link href={`/programs/${program.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>{program}</Link></h3>
                                                <p>Empowering communities through sustainable and inclusive development initiatives.</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            });
                        })()}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="vl-cta-area">
                <div className="container">
                    <div className="vl-cta-bg" style={{ backgroundImage: 'url(/img/cta/vl-cta-1.1.png)' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="vl-cta-content">
                                    <h2 className="title">Join Us in Making a Difference</h2>
                                    <p>Together we can create lasting change in communities across Nigeria. Your support matters.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="vl-cta-btn text-center">
                                    <Link href="/contact" className="header-btn1">Get Involved <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}