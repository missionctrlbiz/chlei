import Link from 'next/link'
import Image from 'next/image'
import AppIcon from '@/components/Icon'
import { socialLinks, contactInfo } from '@/lib/navigation'

export default function Footer() {
    return (
        <footer className="vl-footer-bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="vl-footer-widget-1 mb-30">
                            <div className="vl-footer-logo">
                                <Link href="/">
                                    <Image
                                        src="/img/logo/communitylinks-logo.png"
                                        alt="CLHEI"
                                        width={180}
                                        height={60}
                                    />
                                </Link>
                            </div>
                            <div className="vl-footer-content">
                                <p>Empowering communities through sustainable development, climate action, and inclusive governance. Join us in making a lasting difference across Nigeria.</p>
                            </div>
                            <div className="vl-footer-social-1">
                                <ul>
                                    <li><a href={socialLinks.facebook} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href={socialLinks.instagram} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href={socialLinks.twitter} aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href={socialLinks.linkedin} aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="vl-footer-widget-2 pl-90 mb-30">
                            <h3 className="title">Quick Links</h3>
                            <div className="vl-footer-menu">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/impact">Our Impact</Link></li>
                                    <li><Link href="/blog">News & Stories</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="vl-footer-widget-2 pl-30 mb-30">
                            <h3 className="title">Our Programs</h3>
                            <div className="vl-footer-menu">
                                <ul>
                                    <li><Link href="/programs/climate-action">Climate Action</Link></li>
                                    <li><Link href="/programs/livelihood">Livelihood & Food Security</Link></li>
                                    <li><Link href="/programs/peacebuilding">Peacebuilding</Link></li>
                                    <li><Link href="/programs/mental-health">Mental Health Support</Link></li>
                                    <li><Link href="/programs/governance">Governance</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="vl-footer-widget-3 mb-30">
                            <h3 className="title">Contact Us</h3>

                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span>
                                        <AppIcon name="mdi:email-outline" size={20} title="Email" />
                                    </span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </div>

                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span>
                                        <AppIcon name="mdi:map-marker" size={20} title="Address" />
                                    </span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="#">{contactInfo.address}</a>
                                </div>
                            </div>

                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span>
                                        <AppIcon name="mdi:phone" size={20} title="Phone" />
                                    </span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vl-copyright copyright-border-1">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="vl-copyright-text">© {new Date().getFullYear()} CLHEI. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="vl-copyright-menu">
                                <ul>
                                    <li><Link href="/privacy">Privacy Policy</Link></li>
                                    <li><Link href="/terms">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
