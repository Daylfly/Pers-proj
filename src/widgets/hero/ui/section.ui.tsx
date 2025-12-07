import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import {HeroData}  from './hero';
import Image from "next/image";
import banner from "../../../../public/statics/hero.png";

interface IHeroProps {
    className?: string;
}

export const SectionUi: React.FC<IHeroProps> = ({ className }) => {
    return (
        <section id={"Hero"} className={cn("py-8 md:py-12 lg:py-16", className)}>
            <Container className={"mt-4 sm:mt-6 md:mt-10"}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start lg:items-center">
                    {/* ТЕКСТ - всегда первый */}
                    <div className="lg:order-1 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                        {HeroData.map((item, index) => (
                            <div
                                key={index}
                                className="space-y-3 sm:space-y-4 md:space-y-6"
                            >
                                <h5 className="text-black font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight">
                                    {item.title}
                                </h5>
                                <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ИЗОБРАЖЕНИЕ - второй на мобильных, первый на десктопе */}
                    <div className="lg:order-2">
                        <Image
                            src={banner}
                            alt={"Hero banner"}
                            className="w-full h-auto object-cover rounded-lg"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};