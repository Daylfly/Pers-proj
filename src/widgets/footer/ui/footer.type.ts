
export interface FooterLink {
    label: string;
    href?: string; // необязательно, если это просто текст (например, телефон)
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface FooterProps {
    logoAlt?: string;
    description: string;
    columns: FooterColumn[];
    copyright: string;
    onSubscribe?: (email: string) => void;
}