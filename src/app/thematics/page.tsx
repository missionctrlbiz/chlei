import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
    title: 'Thematic Areas - CHLEI',
    description: 'Multi-sectoral approach addressing humanitarian response, health, peace & security, environment, education and governance.'
}

export default function ThematicsPage() {
    return (
        <>
            <Breadcrumb 
                title="Thematic Areas"
                backgroundImage="/img/breadcrumb/vl-service-bradcrumb.png"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Thematic Areas', active: true }
                ]}
            />

            <section className="vl-thematics-area sp2">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12">
                            <div className="vl-section-title-1 text-center">
                                <h5 className="subtitle">Our Approach</h5>
                                <h2 className="title">Thematic Areas – Community Links & Human Empowerment Initiatives</h2>
                                <p>CHLEI adopts a multi-sectoral approach in the design of her Humanitarian Response and Development programs. These multi-sectoral actions address the social, environmental and economic factors that influence the livelihood of vulnerable, marginalized and displaced populations at the local, national and global levels.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-thematics-content">
                                {/* Humanitarian Response */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Humanitarian Response</h3>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Emergency preparedness and response</li>
                                        <li><i className="fa-solid fa-check"></i> Early recovery</li>
                                        <li><i className="fa-solid fa-check"></i> Social support</li>
                                        <li><i className="fa-solid fa-check"></i> Rehabilitation and integration</li>
                                        <li><i className="fa-solid fa-check"></i> Protection</li>
                                    </ul>
                                </div>

                                {/* Health */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Health</h3>
                                    <p className="mb-20">Enhancing access to safe, quality and affordable healthcare services for all through:</p>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Nutrition</li>
                                        <li><i className="fa-solid fa-check"></i> Mental Health</li>
                                        <li><i className="fa-solid fa-check"></i> Substance Abuse</li>
                                        <li><i className="fa-solid fa-check"></i> Aids, Tuberculosis and Malaria (ATM)</li>
                                        <li><i className="fa-solid fa-check"></i> Maternal, Newborn and Child-Health (MNCH)</li>
                                    </ul>
                                </div>

                                {/* Peace & Security */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Peace & Security</h3>
                                    <p className="mb-20">Enhancing peaceful and inclusive societies and providing access to justice for all through:</p>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Conflict Prevention & Transformation</li>
                                        <li><i className="fa-solid fa-check"></i> Countering & Preventing Violent Extremism</li>
                                    </ul>
                                </div>

                                {/* Environment & Climate Change */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Environment & Climate Change</h3>
                                    <p className="mb-20">To awaken communities to protecting nature and increase focus on bio-diversity protection and regenerative & sustainable agricultural practices through:</p>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Mitigation and Adaptation</li>
                                        <li><i className="fa-solid fa-check"></i> Climate Justice</li>
                                        <li><i className="fa-solid fa-check"></i> Renewable Energy</li>
                                        <li><i className="fa-solid fa-check"></i> Natural Resource Management</li>
                                        <li><i className="fa-solid fa-check"></i> WASH</li>
                                        <li><i className="fa-solid fa-check"></i> Bio-diversity Conservation</li>
                                    </ul>
                                </div>

                                {/* Education */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Education</h3>
                                    <p className="mb-20">Providing equal access to quality education, skills and vocational training and eliminating gender disparities through:</p>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Gender Transformative Education</li>
                                        <li><i className="fa-solid fa-check"></i> Safe Schools</li>
                                        <li><i className="fa-solid fa-check"></i> Education-in-Emergencies</li>
                                    </ul>
                                </div>

                                {/* Democracy & Governance */}
                                <div className="thematic-sector mb-50">
                                    <h3 className="subtitle mb-30">Democracy & Governance</h3>
                                    <p className="mb-20">Promoting Good Governance, Participation and Accountability and fostering Women & Youth Participation in Leadership through:</p>
                                    <ul className="vl-list">
                                        <li><i className="fa-solid fa-check"></i> Policy and Legislative Advocacy/Development</li>
                                        <li><i className="fa-solid fa-check"></i> Women & Youth Political Empowerment</li>
                                    </ul>
                                </div>

                                <div className="vl-btn-area text-center">
                                    <Link href="/programs" className="header-btn1">
                                        See Our Programs <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/projects" className="header-btn1 ms-3">
                                        View Projects <i className="fa-solid fa-arrow-right"></i>
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
