"use client";

import { Slider } from "@/components/ui/slider/slider";
import { DoctorsData } from "./doctors";
import Container from "@/components/shared/container";
import Image from "next/image";

export const DoctorsUi = () => {
    return (
        <Container>
            <section id="doctor" className="py-12 md:py-16 relative">
                <h2 className="text-center text-4xl text-black font-semibold mb-6">Наши врачи</h2>

                <Slider
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    slides={DoctorsData.map((doc, i) => (
                        <div
                            key={i}
                            className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm border"
                        >
                            <a
                                href="https://volgograd.rzd-medicine.ru/doctors/akaev-umar-alievich"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
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
                            </a>
                        </div>
                    ))}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1.3, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3.01, spaceBetween: 20 },
                    }}
                    className="px-10"

                />
            </section>
        </Container>
    );
};
