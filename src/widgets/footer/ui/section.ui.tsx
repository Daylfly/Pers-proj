import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import Image from "next/image";
import { FooterData, footerCopyright } from './footer';
import logo from "../../../../public/statics/logo.svg";

interface IFooterProps {
    className?: string;
}

export const SectionUi: React.FC<IFooterProps> = ({ className }) => {
    return (
        <footer id={"Footer"} className={cn("w-full bg-black text-white", className)}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">
                    <div className="mx-auto">
                        {/* Логотип и описание */}
                        <div className="mb-8">
                            <Image
                                src={logo}
                                alt="Middy Logo"
                                className="mb-4"
                            />
                            <p className="text-white/60 text-sm leading-relaxed max-w-prose">
                                Middy is Volgograd's premier cyber lounge, launched in 2022. Featuring six sleek, high-comfort gaming zones, we blend cutting-edge tech with a futuristic vibe to create an immersive gaming experience like no other.
                            </p>
                        </div>

                        {/* Колонки футера */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {FooterData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-start"
                                >
                                    <h3 className="text-lg font-bold mb-4 text-white">
                                        {item.title}
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        {item.links.map((link, linkIndex) => (
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
                            ))}
                        </div>

                        {/* Копирайт */}
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-white/30 text-sm text-center">
                                {footerCopyright}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
