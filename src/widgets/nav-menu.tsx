import React from 'react';
import {MENU_DATA} from "@/data/menu.data";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface INavMenuProps {
    className?: string;
}
const NavMenu = ({className} : INavMenuProps) => {
    return (
        <div className={cn(className,'')}>
            <nav className="w-full flex gap-6 ">
                <menu className="flex  items-center  gap-6 w-full">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="font-bold text-xl text-black transition-colors duration-200 hover:text-blue-600 font-sans">{item.label}</Link>
                        </li>
                    ))}

                </menu>

            </nav>
        </div>
    );
};

export default NavMenu;