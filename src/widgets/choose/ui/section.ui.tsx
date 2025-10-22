import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import {ChooseData}  from './choose';
import Image from "next/image";

interface IChooseProps {
    className?: string;
}

export const SectionUi: React.FC<IChooseProps> = ({ className }) => {
    return (
        <section id="Choose" className={cn(className, "")}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 justify-items-center">
                        {ChooseData.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center "
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="mb-4"
                                />
                                <h5 className="text-white font-sans text-2xl md:text-3xl lg:text-4xl mb-3">
                                    {item.title}
                                </h5>
                                <p className="text-white/90 font-sans">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};