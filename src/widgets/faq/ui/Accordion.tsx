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
                <h2 className="text-2xl font-bold text-start mb-4 mt-4 text-white">FAQ</h2>
                <div className="px-4 sm:px-6 md:px-8">
                    {FaqData.map((item, index) => (
                        <div key={item.id} className="mb-2">
                            {/* Заголовок вопроса - фиксированная высота */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full border-primary border-3 p-4 flex justify-between items-center text-left  duration-300 h-16 cursor-pointer"
                            >
                                <span className="font-semibold p-3 text-sm sm:text-base md:text-lg lg:text-xl flex-1 text-left w-1/3 text-white">{item.question}</span>
                                <span className="text-xl font-bold transition-transform duration-300 flex-shrink-0 p-3 text-white">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {/* Ответ - поднесенный к вопросу */}
                            <div
                                className={`transition-all duration-500 ease-out overflow-hidden ${
                                    openIndex === index
                                        ? 'max-h-[300px] opacity-100 mt-0 transform translate-y-0'
                                        : 'max-h-0 opacity-0 mt-0 transform translate-y-0'
                                }`}
                            >
                                <div className={`p-2 sm:p-3 transition-all duration-400 ease-out ${
                                    openIndex === index 
                                        ? 'scale-100 translate-y-0' 
                                        : 'scale-95 translate-y-2'
                                }`}>
                                    <div className="text-white leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl border-t border-white/10 pt-2">
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