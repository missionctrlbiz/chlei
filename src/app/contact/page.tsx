import Link from 'next/link'
import Image from 'next/image'
import AppIcon from '@/components/Icon'
import { contactInfo, socialLinks } from '@/lib/navigation'

export const metadata = {
    title: 'Contact Us - CLHEI',
    description: 'Get in touch with Community Links Health, Education, and Infrastructure.'
}

export default function ContactPage() {
    return (
        <>
            {/* Breadcrumb */}
            <div className="vl-breadcrumb-area" style={{ backgroundImage: 'url(/img/breadcrumb/vl-contact-bg.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="vl-breadcrumb-content text-center">
                                <h1 className="title">Contact Us</h1>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li className="active">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <section className="vl-contact-area sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl-contact-content">
                                <div className="vl-section-title-1 mb-40">
                                    <h5 className="subtitle">Get In Touch</h5>
                                    <h2 className="title">Connect With CLHEI</h2>
                                    <p>We're here to answer your questions and discuss how we can work together to create lasting change in communities across Nigeria.</p>
                                </div>

                                {/* Contact Info Boxes */}
                                <div className="vl-contact-info-box mb-30">
                                    <div className="vl-contact-icon">
                                        <span><AppIcon name="mdi:email-outline" size={24} title="Email" /></span>
                                    </div>
                                    <div className="vl-contact-text">
                                        <h4>Email Address</h4>
                                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                    </div>
                                </div>

                                <div className="vl-contact-info-box mb-30">
                                    <div className="vl-contact-icon">
                                        <span><AppIcon name="mdi:phone" size={24} title="Phone" /></span>
                                    </div>
                                    <div className="vl-contact-text">
                                        <h4>Phone Number</h4>
                                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                                    </div>
                                </div>

                                <div className="vl-contact-info-box mb-30">
                                    <div className="vl-contact-icon">
                                        <span><AppIcon name="mdi:map-marker" size={24} title="Address" /></span>
                                    </div>
                                    <div className="vl-contact-text">
                                        <h4>Office Address</h4>
                                        <p>{contactInfo.address}</p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="vl-contact-social mt-40">
                                    <h4 className="title mb-20">Follow Us On Social Media</h4>
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
                        </div>

                        <div className="col-lg-6">
                            <div className="vl-contact-form">
                                <h3 className="title mb-30">Send Us a Message</h3>
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="vl-input-box mb-30">
                                                <input type="text" name="name" placeholder="Your Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="vl-input-box mb-30">
                                                <input type="email" name="email" placeholder="Email Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="vl-input-box mb-30">
                                                <input type="tel" name="phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="vl-input-box mb-30">
                                                <input type="text" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="vl-input-box mb-30">
                                                <textarea name="message" placeholder="Your Message *" rows={6} required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="vl-btn-area">
                                                <button type="submit" className="header-btn1">Send Message <span><i className="fa-solid fa-arrow-right"></i></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Optional - Add Google Maps embed if needed) */}
            <section className="vl-map-area">
                <div className="container-fluid p-0">
                    <div className="vl-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9087505!2d7.4!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="CLHEI Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
