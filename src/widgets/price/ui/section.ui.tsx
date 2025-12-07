"use client";

import { pricesData } from "./price";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Container from "@/components/shared/container";
import { Check } from "lucide-react";

export const PricesSectionUI = () => {
    const { title, subtitle, categories } = pricesData;

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <Container>
                <div className="max-w-6xl mx-auto">
                    {/* Заголовок */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600">{subtitle}</p>
                    </div>

                    {/* 4 карточки — закрыты по умолчанию */}
                    <div className="grid md:grid-cols-1 gap-6 lg:gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.title}
                                className="bg-white rounded-xl  overflow-hidden border border-2"
                            >
                                {/* Каждый — свой отдельный аккордеон */}
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="prices">
                                        <AccordionTrigger className="px-8 py-6 text-xl lg:text-2xl font-medium text-gray-800 hover:bg-gray-50">
                                            {category.title}
                                        </AccordionTrigger>

                                        <AccordionContent className="px-8 pb-8">
                                            <div className="space-y-5  ">
                                                {category.items.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="flex items-center text-xl justify-between py-3 border-b border-gray-100 last:border-0"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                                            <span className="text-gray-950">{item.name}</span>
                                                        </div>
                                                        <span className="text-xl  text-blue-600">
                              {item.price.toLocaleString()} ₽
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