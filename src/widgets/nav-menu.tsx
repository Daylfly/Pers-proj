import React from 'react';
import {MENU_DATA} from "@/data/menu.data";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface INavMenuProps {
    className?: string;
}
const NavMenu = ({className} : INavMenuProps) => {
    return (
        <div className={cn(className,'')}>
            <nav className="w-full">
                <menu className="flex items-end gap-x-4 md:gap-x-5 lg:gap-x-10 w-full">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="font-bold text-xl text-white transition-colors duration-200 hover:text-primary font-sans">{item.label}</Link>
                        </li>
                    ))}


                </menu>
            </nav>
        </div>
    );
};

export default NavMenu;