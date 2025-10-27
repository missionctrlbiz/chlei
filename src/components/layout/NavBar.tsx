"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { navigationLinks, contactInfo } from '@/lib/navigation'

function LogoImage({ small, footer }: { small?: boolean; footer?: boolean }) {
    const [src, setSrc] = useState('/img/logo/communitylinks-logo.png')
    const fallback = footer ? '/img/logo/vl-footer-logo-1.1.png' : '/img/logo/vl-logo-1.1.png'
    const width = footer ? 160 : small ? 140 : 220
    const height = footer ? 48 : small ? 40 : 64

    return (
        <Image
            src={src}
            alt="CLHEI Logo"
            width={width}
            height={height}
            onError={() => setSrc(fallback)}
            priority={true}
        />
    )
}

export default function NavBar() {
    return (
        <>
            {/* Desktop Header */}
            <header>
                <div className="header-area homepage1 header header-sticky d-none d-lg-block mt-16" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements header-elements-1">
                                    <div className="site-logo">
                                        <Link href="/">
                                            <LogoImage />
                                        </Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="#">About <i className="fa-solid fa-angle-down"></i></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/about">About CHLEI</Link></li>
                                                    <li><Link href="/thematics">Thematic Areas</Link></li>
                                                    <li><Link href="/team">Our Team</Link></li>
                                                    <li><Link href="/partners">Partners</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#">Programs <i className="fa-solid fa-angle-down"></i></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/programs">All Programs</Link></li>
                                                    <li><Link href="/programs/climate-action">Climate Action</Link></li>
                                                    <li><Link href="/programs/livelihood">Livelihood & Food Security</Link></li>
                                                    <li><Link href="/programs/peacebuilding">Peacebuilding</Link></li>
                                                    <li><Link href="/programs/mental-health">Mental Health</Link></li>
                                                    <li><Link href="/programs/governance">Governance</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#">Projects <i className="fa-solid fa-angle-down"></i></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/projects">All Projects</Link></li>
                                                    <li><Link href="/projects/agriculture">Agriculture</Link></li>
                                                    <li><Link href="/projects/education">Education</Link></li>
                                                    <li><Link href="/projects/environment-climate-change">Environment & Climate</Link></li>
                                                    <li><Link href="/projects/health">Health</Link></li>
                                                    <li><Link href="/projects/governance">Governance</Link></li>
                                                    <li><Link href="/projects/humanitarian-response">Humanitarian Response</Link></li>
                                                    <li><Link href="/projects/peace-security">Peace & Security</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#">Resources <i className="fa-solid fa-angle-down"></i></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/impact">Our Impact</Link></li>
                                                    <li><Link href="/reports">Reports & Publications</Link></li>
                                                    <li><Link href="/policies">Policies</Link></li>
                                                    <li><Link href="/blog">News & Stories</Link></li>
                                                    <li><Link href="/faq">FAQ</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="#">Get Involved <i className="fa-solid fa-angle-down"></i></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/volunteer-mentorship">Volunteer & Mentorship</Link></li>
                                                    <li><Link href="/donate">Donate</Link></li>
                                                    <li><Link href="/contact">Contact Us</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <Link href="/donate" className="header-btn1">Donate <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header - Hidden on desktop (lg and above) */}
            <div className="mobile-header-area d-lg-none">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="mobile-logo">
                                <Link href="/">
                                    <LogoImage small />
                                </Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mobile-menu-bar text-end">
                                <button className="mobile-menu-toggle">
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Sidebar - Hidden by default, shown when toggled */}
            <div className="mobile-sidebar mobile-sidebar1">
                <div className="menu-close">
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <ul className="mobile-nav-list nav-list1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About</Link>
                        <ul className="sub-menu">
                            <li><Link href="/about">About CHLEI</Link></li>
                            <li><Link href="/thematics">Thematic Areas</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Programs</Link>
                        <ul className="sub-menu">
                            <li><Link href="/programs">All Programs</Link></li>
                            <li><Link href="/programs/climate-action">Climate Action</Link></li>
                            <li><Link href="/programs/livelihood">Livelihood & Food Security</Link></li>
                            <li><Link href="/programs/peacebuilding">Peacebuilding</Link></li>
                            <li><Link href="/programs/mental-health">Mental Health</Link></li>
                            <li><Link href="/programs/governance">Governance</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Projects</Link>
                        <ul className="sub-menu">
                            <li><Link href="/projects">All Projects</Link></li>
                            <li><Link href="/projects/agriculture">Agriculture</Link></li>
                            <li><Link href="/projects/education">Education</Link></li>
                            <li><Link href="/projects/environment-climate-change">Environment & Climate</Link></li>
                            <li><Link href="/projects/health">Health</Link></li>
                            <li><Link href="/projects/governance">Governance</Link></li>
                            <li><Link href="/projects/humanitarian-response">Humanitarian Response</Link></li>
                            <li><Link href="/projects/peace-security">Peace & Security</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Resources</Link>
                        <ul className="sub-menu">
                            <li><Link href="/impact">Our Impact</Link></li>
                            <li><Link href="/reports">Reports & Publications</Link></li>
                            <li><Link href="/policies">Policies</Link></li>
                            <li><Link href="/blog">News & Stories</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Get Involved</Link>
                        <ul className="sub-menu">
                            <li><Link href="/volunteer-mentorship">Volunteer & Mentorship</Link></li>
                            <li><Link href="/donate">Donate</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </li>
                </ul>

                <div className="allmobilesection">
                    <Link href="/donate" className="header-mobile-btn1">Donate Now <span><i className="fa-solid fa-arrow-right"></i></span></Link>

                    <div className="vl-mobile-contact1">
                        <h3 className="title">Contact Info</h3>
                        <div className="footer1-contact-info">
                            <div className="contact-info-single">
                                <div className="contact-info-icon">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <div className="contact-info-text">
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </div>
                            </div>

                            <div className="contact-info-single">
                                <div className="contact-info-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </div>

                            <div className="contact-info-single">
                                <div className="contact-info-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-info-text">
                                    <a href="#">{contactInfo.address}</a>
                                </div>
                            </div>
                        </div>

                        <div className="vl-mobile-social">
                            <h3 className="title">Social Links</h3>
                            <div className="social-links-mobile-menu">
                                <ul>
                                    <li><a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
