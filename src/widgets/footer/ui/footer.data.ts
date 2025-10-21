
import { FooterColumn } from "./../ui/footer.type";


export const footerCopyright = "© 2024 Middy. All rights reserved.";

export const footerColumns: FooterColumn[] = [
    {
        title: "Legal",
        links: [
            { label: "Privacy policy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Promotions", href: "#" },
            { label: "Cookie policy", href: "#" },
        ],
    },
    {
        title: "Contact",
        links: [
            { label: "+78005553535" }, // без href → просто текст
            { label: "middy@promo" },
            { label: "st. tripper 21" },
            { label: "@middy", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About US", href: "#" },
            { label: "License", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Franchise", href: "#" },
        ],
    },
];