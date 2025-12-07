"use client";

import { Slider } from "@/components/ui/slider/slider";
import Image from "next/image";
import { DoctorsData } from "./doctors";
import Container from "@/components/shared/container";
import { useRef } from "react";

export const DoctorsUi = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Container>
            <section className="py-12 md:py-16 relative">
                <h2 className="text-center text-4xl text-black font-semibold mb-6">Наши врачи</h2>

                {/* Минималистичные кнопки навигации */}
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-100"
                >
                    {/*<span className="block w-6 h-6 border-t-4 border-l-4 border-gray-900 rotate-317 -translate-x-[1px] -translate-y-[1px]"></span>*/}
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-700"
                >
                    {/*<span className="block w-6 h-6 border-t-4 border-l-4 border-gray-900 rotate-135 -translate-x-[1px] -translate-y-[1px]"></span>*/}
                </button>

                <Slider
                    slides={DoctorsData.map((doc, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden bg-white shadow-sm border"
                        >
                            <Image
                                src={doc.image}
                                alt={doc.name}
                                width={500}
                                height={300}
                                className="w-full h-[280px] object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <h3 className="font-medium text-black text-lg">{doc.name}</h3>
                                <p className="text-gray-500 text-sm">{doc.position}</p>
                                <span className="inline-block bg-gray-200 text-gray-950 px-3 py-1 rounded text-xs">
          {doc.experience}
        </span>
                                <p className="text-xs text-gray-500">{doc.degree}</p>
                            </div>
                        </div>
                    ))}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1.3, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    navigation={true} // ← просто true
                    className="px-10"
                    // ← УДАЛИЛ onBeforeInit и кастомный navigation объект

                />
            </section>
        </Container>
    );
};
