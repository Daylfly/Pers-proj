import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import {ChooseData} from "@/widgets/choose/ui/choose";
import {DiscountData}  from './discount';


interface IAboutProps {
    className?: string;
}

export const SectionUi: React.FC<IAboutProps> = ({ className }) => {
    return (
        <section id={"Discount"} className={cn(className, "")}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">
                    <div className=" mx-auto">
                        <h3 className="text-white font-bold sm:text-xl md:text-2xl lg:text-4xl text-start mb-10">
                            Discount
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {DiscountData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-start justify-between"
                                >
                                    <h4 className="font-bold text-primary text-2xl md:text-3xl mb-2">
                                        {item.subtitle}
                                    </h4>
                                    <h5 className="font-bold text-white text-xl md:text-2xl mb-3">
                                        {item.title}
                                    </h5>
                                    <p className="text-white/70 text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};