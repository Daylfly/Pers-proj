"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/nav-menu";
import MobileMenu from "@/widgets/mobile-menu";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../public/statics/logo.svg";
import {Button} from "@/components/ui/button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full z-50 sticky top-0 bg-white border-b border-zinc-900/10" id='header'>
            <Container className="w-full px-4 sm:px-6 lg:px-8  flex items-center justify-between">
                {/* Логотип */}
                <div className="flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Логотип сайта"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                        priority
                        sizes="120px"
                    />
                </div>

                {/* Основное меню и кнопки - десктоп */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {/* Навигационное меню */}
                    <NavMenu className="flex items-center gap-6 xl:gap-8" />

                    {/* Кнопки CTA */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Button
                            className={`
                                h-11 sm:h-12 px-5 sm:px-6 lg:px-8 
                                text-sm sm:text-base lg:text-lg lg:text-2xl 
                                bg-transparent text-black border-3 border-zinc-900 
                                hover:bg-zinc-100 cursor-pointer 
                                transition-all duration-300 
                                hover:scale-105 active:scale-95
                            `}
                        >
                            Записаться
                        </Button>
                        <Button
                            className={`
                                h-11 sm:h-12 px-5 sm:px-6 lg:px-8 
                                text-sm sm:text-base lg:text-lg lg:text-2xl 
                                bg-zinc-950 text-white border-3 border-zinc-900 
                                hover:bg-zinc-800 cursor-pointer 
                                transition-all duration-300 
                                hover:scale-105 active:scale-95 shadow-sm
                            `}
                        >
                            Личный кабинет
                        </Button>
                    </div>
                </div>

                {/* Мобильная кнопка меню */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="
                        lg:hidden p-2.5 sm:p-3
                        bg-zinc-950 text-white
                        border-2 border-zinc-900
                        hover:bg-zinc-800
                        rounded-lg
                        transition-all duration-300
                        hover:scale-110 active:scale-95
                        shadow-sm hover:shadow-md
                    "
                    aria-label="Открыть меню"
                >
                    <RiMenu3Fill className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Мобильное меню */}
                <MobileMenu
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />
            </Container>

            {/* Overlay для мобильного меню */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;