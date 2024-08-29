export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: string
    label?: string
}

export type SidebarNavItem = NavItem & {
    items?: SidebarNavItem[]
}

export type NavItemWithChildren = NavItem & {
    items?: NavItemWithChildren[]
}

interface DocsConfig {
    mainNav: NavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'Docs',
            href: '/docs/introduction',
        },
        {
            title: 'Components',
            href: '/docs/components/phone-input',
        },
    ],
    sidebarNav: [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs/introduction',
                },
                {
                    title: 'Installation',
                    href: '/docs/installation',
                },
            ],
        },
        {
            title: 'Components',
            items: [
                {
                    title: 'Phone Input',
                    href: '/docs/components/phone-input',
                },
                {
                    title: 'Marquee',
                    href: '/docs/components/marquee',
                },
                {
                    title: 'Kbd',
                    href: '/docs/components/kbd',
                },
                {
                    title: 'Hero Video Dialog',
                    href: '/docs/components/hero-video-dialog',
                },
                {
                    title: 'Bento grid',
                    href: '/docs/components/bento-grid',
                },
                {
                    title: 'Animated Subscribe Button',
                    href: '/docs/components/animated-subscribe-button',
                },
            ],
        },
    ],
}
