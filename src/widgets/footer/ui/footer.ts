export type Footer = {
    id: number;
    title: string;
    links: {
        label: string;
        href?: string;
    }[];
};

export const FooterData: Footer[] = [
    {
        id: 1,
        title: "Legal",
        links: [
            { label: "Privacy policy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Promotions", href: "#" },
            { label: "Cookie policy", href: "#" },
        ],
    },
    {
        id: 2,
        title: "Contact",
        links: [
            { label: "+78005553535" },
            { label: "middy@promo" },
            { label: "st. tripper 21" },
            { label: "@middy", href: "#" },
        ],
    },
    {
        id: 3,
        title: "Company",
        links: [
            { label: "About US", href: "#" },
            { label: "License", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Franchise", href: "#" },
        ],
    },
];

export const footerCopyright = "© 2024 Middy. All rights reserved.";
