"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { MENU_DATA } from "@/data/menu.data";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface IMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: IMobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div
                onClick={onClose}
                className={cn(
                    "fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-200",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            />
            <aside
                className={cn(
                    "fixed top-0 right-0 bottom-0 p-5 max-w-xs w-full h-screen bg-white border-l border-white z-50 transform transition-transform",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="w-full space-y-4">
                    <menu className="w-full flex flex-col gap-2">
                        {MENU_DATA.map((item, index) => (
                            <li key={index} className="w-full">
                                <Link
                                    onClick={onClose}
                                    href={item.href}
                                    className="p-3 inline-flex items-center text-black gap-3 w-full text-lg bg-transparent rounded-md transition-colors hover:bg-black hover:text-gray-100"
                                >
                                    <span>{item.label}</span>
                                </Link>

                            </li>

                        ))}
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
                            `}>Личный кабинет</Button>
                    </menu>
                </div>
            </aside>
        </>
    );
};

export default MobileMenu;