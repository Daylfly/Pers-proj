import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import {ChooseData} from "@/widgets/choose/ui/choose";
import {AboutData}  from './about';


interface IAboutProps {
    className?: string;
}

export const SectionUi: React.FC<IAboutProps> = ({ className }) => {
    return (
        <section className={cn(className, "")}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">
                    <div className="grid gap-10  mx-auto">
                        {AboutData.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col lg:flex-row items-center gap-8"
                            >
                                <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center lg:justify-start">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={707}
                                        height={707}
                                        className="w-full h-auto  lg:max-h-[700px] md:max-h-[450px]  lg:max-w-[700px] sm:max-h-[450px]  sm:max-w-[450px] md:max-w-[450px]  lg:max-h-none object-cover i"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 text-center lg:text-left max-w-lg">
                                    <h5 className="text-white font-sans text-2xl md:text-3xl lg:text-4xl mb-4">
                                        {item.title}
                                    </h5>
                                    <p className="text-white/90 font-sans">{item.description}</p>
                                </div>

                                {/* Фото */}

                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};