import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'
import AppIcon from '@/components/Icon'
import Counter from '@/components/CountUp'
import HeroSlider from '@/components/HeroSlider'
import { organizationInfo } from '@/lib/content'

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
            <section className="py-16">
                <div className="container">
                    <Tabs defaultValue="health" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="health">Health</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="climate">Climate</TabsTrigger>
                            <TabsTrigger value="peace">Peace</TabsTrigger>
                        </TabsList>

                        <TabsContent value="health">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Mental Health & Psychosocial Support</CardTitle>
                                        <CardDescription>Supporting conflict-affected communities</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Over 500,000 beneficiaries reached since 2018...</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Primary Healthcare</CardTitle>
                                        <CardDescription>Providing essential health services</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Supporting local clinics and health workers.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Maternal & Child Health</CardTitle>
                                        <CardDescription>Improving outcomes for mothers and children</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Antenatal and postnatal care programs.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="education">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>School Enrollment</CardTitle>
                                        <CardDescription>Increasing access to education</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Getting children back to school.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Adult Literacy</CardTitle>
                                        <CardDescription>Empowering adults with literacy skills</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Literacy and numeracy programs.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Vocational Training</CardTitle>
                                        <CardDescription>Providing skills for employment</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Training in various trades and crafts.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="climate">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Climate Adaptation</CardTitle>
                                        <CardDescription>Building resilience to climate change</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Community-based adaptation strategies.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Environmental Protection</CardTitle>
                                        <CardDescription>Conserving natural resources</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Reforestation and conservation projects.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Clean Energy</CardTitle>
                                        <CardDescription>Promoting sustainable energy solutions</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Access to clean and affordable energy.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="peace">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Conflict Resolution</CardTitle>
                                        <CardDescription>Mediating and resolving conflicts</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Community-based peace initiatives.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Community Peacebuilding</CardTitle>
                                        <CardDescription>Building social cohesion</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Peace clubs and community dialogues.</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Youth Empowerment</CardTitle>
                                        <CardDescription>Engaging youth in peacebuilding</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Youth leadership and mentorship programs.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
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