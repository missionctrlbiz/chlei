// Navigation configuration for CLHEI website
export const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
        href: '/programs',
        label: 'Our Programs',
        submenu: [
            { href: '/programs/climate-action', label: 'Climate Action' },
            { href: '/programs/livelihood', label: 'Livelihood & Food Security' },
            { href: '/programs/peacebuilding', label: 'Peacebuilding' },
            { href: '/programs/mental-health', label: 'Mental Health' },
            { href: '/programs/governance', label: 'Governance' },
        ]
    },
    { href: '/impact', label: 'Our Impact' },
    { href: '/blog', label: 'News & Stories' },
    { href: '/contact', label: 'Contact Us' },
]

export const socialLinks = {
    facebook: 'https://facebook.com/communitylinks',
    twitter: 'https://twitter.com/communitylinks',
    instagram: 'https://instagram.com/communitylinks',
    linkedin: 'https://linkedin.com/company/communitylinks',
}

export const contactInfo = {
    email: 'info@communitylinks.org.ng',
    phone: '+234 (0) 123 456 7890',
    address: 'Federal Capital Territory, Abuja, Nigeria',
}
