"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/nav-menu";
import MobileMenu from "@/widgets/mobile-menu";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../public/statics/logo.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full " id='header'>
            <Container className="w-full flex items-center gap-x-16 justify-between">
                <Image 
                    src={logo} 
                    alt="Логотип сайта" 
                    className="w-30 h-30 sm:w-35 sm:h-35 md:w-50 md:h-50 lg:w-auto lg:h-auto"
                />
                <NavMenu className=" hidden md:block items-end" />
                <button 
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden p-2 text-white hover:text-primary transition-colors"
                    aria-label="Открыть меню"
                >
                    <RiMenu3Fill className="text-2xl" />
                </button>
                <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            </Container>
        </header>
    );
};

export default Header;
