// Navigation configuration for CHLEI website
export const navigationLinks = [
    { href: '/', label: 'Home' },
    {
        href: '/about',
        label: 'About',
        submenu: [
            { href: '/about', label: 'About CHLEI' },
            { href: '/thematics', label: 'Thematic Areas' },
            { href: '/team', label: 'Our Team' },
            { href: '/partners', label: 'Partners' },
        ]
    },
    {
        href: '/programs',
        label: 'Programs',
        submenu: [
            { href: '/programs', label: 'All Programs' },
            { href: '/programs/climate-action', label: 'Climate Action' },
            { href: '/programs/livelihood', label: 'Livelihood & Food Security' },
            { href: '/programs/peacebuilding', label: 'Peacebuilding' },
            { href: '/programs/mental-health', label: 'Mental Health' },
            { href: '/programs/governance', label: 'Governance' },
        ]
    },
    {
        href: '/projects',
        label: 'Projects',
        submenu: [
            { href: '/projects', label: 'All Projects' },
            { href: '/projects/agriculture', label: 'Agriculture' },
            { href: '/projects/education', label: 'Education' },
            { href: '/projects/environment-climate-change', label: 'Environment & Climate' },
            { href: '/projects/health', label: 'Health' },
            { href: '/projects/governance', label: 'Governance' },
            { href: '/projects/humanitarian-response', label: 'Humanitarian Response' },
            { href: '/projects/peace-security', label: 'Peace & Security' },
        ]
    },
    {
        href: '/resources',
        label: 'Resources',
        submenu: [
            { href: '/impact', label: 'Our Impact' },
            { href: '/reports', label: 'Reports & Publications' },
            { href: '/policies', label: 'Policies' },
            { href: '/blog', label: 'News & Stories' },
            { href: '/faq', label: 'FAQ' },
        ]
    },
    {
        href: '/get-involved',
        label: 'Get Involved',
        submenu: [
            { href: '/volunteer-mentorship', label: 'Volunteer & Mentorship' },
            { href: '/donate', label: 'Donate' },
            { href: '/contact', label: 'Contact Us' },
        ]
    },
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
