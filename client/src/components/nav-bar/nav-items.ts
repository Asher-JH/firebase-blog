type NavItem = {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
        subLabel: string;
    }[];
};

export const NAV_ITEMS: NavItem[] = [];
