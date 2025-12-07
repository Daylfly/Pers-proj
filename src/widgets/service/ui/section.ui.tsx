import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { ServiceData } from "./service";

import {
    Stethoscope,
    HeartPulse,
    Brain,
    Eye,
    Bone,
    Activity,
    Baby,
    FlaskConical,
} from "lucide-react";

const icons = {
    stethoscope: Stethoscope,
    heartPulse: HeartPulse,
    brain: Brain,
    eye: Eye,
    bone: Bone,
    activity: Activity,
    baby: Baby,
    flaskConical: FlaskConical,
};

interface IServiceProps {
    className?: string;
}

export const ServiceUi: React.FC<IServiceProps> = ({ className }) => {
    return (
        <section id="Services" className={cn("py-8 md:py-12 lg:py-16", className)}>
            <Container className="mt-4 sm:mt-6 md:mt-10">

                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-black font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Наши услуги
                    </h2>
                    <p className="text-black/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
                        Предоставляем полный спектр медицинских услуг с использованием современного оборудования
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {ServiceData.map((service, index) => {
                        const Icon = icons[service.icon];
                        return (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 border rounded-xl transition hover:shadow-md"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center mb-4">
                                    <Icon className="w-8 h-8 text-black" />
                                </div>

                                <h3 className="font-semibold text-lg mb-2 text-black">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-black/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </Container>
        </section>
    );
};
