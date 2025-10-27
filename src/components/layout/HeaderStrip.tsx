import Link from 'next/link'
import AppIcon from '@/components/Icon'
import { contactInfo } from '@/lib/navigation'

export default function HeaderStrip() {
    return (
        <div className="vl-header-top d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="vl-header-top-content">
                            <p>Empowering Communities, Transforming Lives Since 2006</p>
                            <Link href="/contact" className="top-contact">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="vl-header-top-icon">
                            <div className="vl-header-top-icbox">
                                <div className="top-icon">
                                    <span>
                                        <AppIcon name="mdi:email-outline" size={20} title="Email" />
                                    </span>
                                </div>
                                <div className="top-content">
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </div>
                            </div>

                            <div className="vl-header-top-icbox">
                                <div className="top-icon">
                                    <span>
                                        <AppIcon name="mdi:phone" size={20} title="Phone" />
                                    </span>
                                </div>
                                <div className="top-content">
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
