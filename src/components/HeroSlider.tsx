'use client'

import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import AppIcon from '@/components/Icon'
import { organizationInfo } from '@/lib/content'

export default function HeroSlider() {
    const swiperRef = useRef<any>(null)

    useEffect(() => {
        // Dynamically import Swiper to avoid SSR issues
        const initSwiper = async () => {
            const Swiper = (await import('swiper')).default
            const { Navigation, Pagination, Autoplay, EffectFade } = await import('swiper/modules')

            if (swiperRef.current) {
                new Swiper(swiperRef.current, {
                    modules: [Navigation, Pagination, Autoplay, EffectFade],
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    speed: 1000,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                })
            }
        }

        initSwiper()
    }, [])

    const slides = [
        {
            title: 'CHLEI',
            subtitle: organizationInfo.tagline,
            description: 'Working with communities to effect positive change in systems and structures for sustainable development since 2006.',
            bg: '/img/banner/vl-banner-1.1.png',
            cta: { text: 'Join Our Mission', link: '/contact' }
        },
        {
            title: 'CHLEI',
            subtitle: 'Empowering Change',
            description: 'Impacting over 300 communities and 9 million lives through sustainable development, climate action, and inclusive governance.',
            bg: '/img/banner/vl-banner-1.1.png',
            cta: { text: 'Learn More', link: '/about' }
        },
        {
            title: 'CHLEI',
            subtitle: 'Creating Lasting Impact',
            description: 'Working across North Central and North East Nigeria with ECOSOC status and Observer Status to the UNFCCC.',
            bg: '/img/banner/vl-banner-1.1.png',
            cta: { text: 'Our Programs', link: '/programs' }
        }
    ]

    return (
        <div className="vl-hero-area1">
            <div ref={swiperRef} className="swiper vl-hero-slider">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div key={index} className="swiper-slide">
                            <div className="vl-hero-bg" style={{ backgroundImage: `url(${slide.bg})` }}>
                                <div className="vl-hero-shape shape-1">
                                    <Image src="/img/shape/vl-hero-shape-1.1.png" alt="decorative shape" width={160} height={160} />
                                </div>
                                <div className="vl-hero-shape shape-2">
                                    <Image src="/img/shape/vl-hero-shape-1.2.png" alt="decorative shape" width={160} height={160} />
                                </div>

                                <div className="vl-hero-social d-none d-lg-block">
                                    <h4 className="title">Follow Us:</h4>
                                    <div className="vl-hero-social-icon">
                                        <ul>
                                            <li><a href="https://facebook.com/clhei" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="https://instagram.com/clhei" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="https://twitter.com/clhei" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://linkedin.com/company/clhei" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="vl-hero-section-title">
                                                <Badge variant="secondary" className="mb-4">
                                                    Since 2006
                                                </Badge>
                                                <h1 className="text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="400">{slide.title}</h1>
                                                <p className="text-xl text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="600">{slide.description}</p>
                                                <div className="vl-hero-btn" data-aos="fade-up" data-aos-delay="800">
                                                    <Button asChild size="lg">
                                                        <Link href={slide.cta.link}>{slide.cta.text}</Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}
