'use client';

import { useState } from 'react';
import { FaqData } from './faq';
import Container from "@/components/shared/container";

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container>
            <div className="bg-black text-white   sm:pt-10 md:pt-20 lg:pt-30 ">
                <h2 className="text-2xl font-bold text-start mb-4 mt-4">FAQ</h2>
                <div className="px-4 sm:px-6 md:px-8">
                    {FaqData.map((item, index) => (
                        <div key={item.id} className="mb-2">
                            {/* Заголовок вопроса - фиксированная высота */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full border-primary border-3 p-4 flex justify-between items-center text-left  duration-300 h-16 cursor-pointer"
                            >
                                <span className="font-semibold p-3 text-sm sm:text-base md:text-lg lg:text-xl flex-1 text-left w-1/3">{item.question}</span>
                                <span className="text-xl font-bold transition-transform duration-300 flex-shrink-0 p-3">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {/* Ответ - обычное позиционирование с анимацией */}
                            <div
                                className={`transition-all duration-700 ease-out overflow-hidden ${
                                    openIndex === index
                                        ? 'max-h-[300px] opacity-100 mt-2 transform translate-y-0'
                                        : 'max-h-0 opacity-0 mt-0 transform translate-y-8'
                                }`}
                            >
                                <div className={`p-4 sm:p-6 transition-all duration-600 ease-out ${
                                    openIndex === index 
                                        ? 'scale-100 translate-y-0 rotate-0' 
                                        : 'scale-90 translate-y-4 rotate-1'
                                }`}>
                                    <div className="text-white/80 leading-relaxed text-sm sm:text-base">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}