"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../public/statics/logo.svg";
import { FooterProps } from "./footer/ui/footer.type";

const Footer = ({
                    logoAlt = "Middy Logo",
                    description,
                    columns,
                    copyright,
                    onSubscribe,
                }: FooterProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubscribe) {
            onSubscribe(email);
        } else {
            console.log('Subscribed:', email);
        }
        setEmail('');
    };

    return (
        <footer className="pl-14 pr-14 w-full bg-black text-white">
            <Container className="py-8 md:py-12">
                {/* Основной контент футера */}
                <div className="grid grid-cols-1 gap-8 mb-8">
                    {/* Логотип и описание */}

                    <div className="lg:col-span-1 flex flex-col items-start lg:items-start text-start lg:text-left">
                        <Image
                            src={logo}
                            alt={logoAlt}
                            className="mx-auto lg:mx-0"
                        />
                        <div className="mb-4">

                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-prose">
                            {description}
                        </p>
                    </div>
                    <div className="grid gap-6   grid-cols-2 lg:grid-cols-3 justify-between">
                        {/* Динамические колонки */}
                        {columns.map((column, index) => (
                            <div key={index} className="text-start lg:text-left">
                                <h3 className="text-lg font-bold mb-4">{column.title}</h3>
                                <ul className="space-y-2 text-sm">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.href ? (
                                                <a
                                                    href={link.href}
                                                    className="text-white/60 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <span className="text-white/60">{link.label}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}</div>
                </div>

                {/* Копирайт */}
                <div className="pt-4 border-t border-white/10">
                    <p className="text-white/30 text-sm text-center">
                        {copyright}
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;