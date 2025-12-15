"use client";

import { pricesData } from "./price";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Container from "@/components/shared/container";
import { Check } from "lucide-react";

export const PricesSectionUI = () => {
    const { title, subtitle, categories } = pricesData;

    return (
        <section id="price" className="py-16 sm:py-20 lg:py-[120px] bg-gray-50">
            <Container>
                <div className="w-full">
                    {/* Заголовок */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    </div>

                    {/* Аккордеоны — ЗАКРЫТЫ ПО УМОЛЧАНИЮ */}
                    <div className="grid gap-[25px]">
                        {categories.map((category) => (
                            <div
                                key={category.title}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={category.title}>
                                        <AccordionTrigger className="px-8 py-6 text-xl lg:text-2xl font-medium text-gray-800 hover:bg-gray-50 transition">
                                            {category.title}
                                        </AccordionTrigger>

                                        <AccordionContent className="px-8 pb-8 pt-2">
                                            <div className="space-y-4">
                                                {category.items.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                                                    >
                                                        <div className="flex items-center gap-4 flex-1">
                                                            <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                                            <span className="text-gray-900 text-base lg:text-lg leading-relaxed">
                                {item.name}
                              </span>
                                                        </div>

                                                        <span className="text-xl lg:text-2xl font-medium text-blue-600 whitespace-nowrap ml-4">
                              {item.price.toLocaleString("ru-RU")} ₽
                            </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};