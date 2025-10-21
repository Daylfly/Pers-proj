import {Menu} from "@/types/menu.interface"
import {APP_ROUTES} from "@/routes/app.route";


export const MENU_DATA: Menu[] = [
    {
        label:"GAME ZONE",
        href: APP_ROUTES.home(),
    },
    {
        label:"PC Hardware",
        href: APP_ROUTES.about(),
    },
    {
        label:"Price",
        href: APP_ROUTES.foods(),
    },
    {
        label:"Booking",
        href: APP_ROUTES.foods(),
    },
    {
        label:"Contacts",
        href: APP_ROUTES.foods(),
    },
    {
        label:"Faq",
        href: APP_ROUTES.foods(),
    },
];