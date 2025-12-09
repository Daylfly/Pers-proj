"use client";

import { equipmentData } from "./equipment";
import Container from "@/components/shared/container";
import Image from "next/image";
import EquipmentGallery from "./equipment-gallery"; // ← оставляем локальный импорт

import equipmentLeft from "../../../../public/statics/eqip/l.webp";
import equipmentRight from "../../../../public/statics/eqip/r.jpg";
import eq3 from "../../../../public/statics/eqip/l.webp";
import eq4 from "../../../../public/statics/eqip/r.jpg";

export const EquipmentSectionUI = () => {
    const { title, subtitle, diagnostics, laboratory, rehabilitation } = equipmentData;

    const gallerySlides = [
        equipmentLeft,
        equipmentRight,
        eq3 || equipmentLeft,
        eq4 || equipmentRight,
    ];

    return (
        <Container>
            <section className="py-16 lg:py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">

                    {/* Заголовок */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-950 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    </div>

                    {/* Галерея — 1 фото на всю ширину */}
                    <div className="mb-16 lg:mb-20">
                        <EquipmentGallery
                            slides={gallerySlides.map((img, i) => (
                                <div key={i} className="w-full">
                                    <Image
                                        src={img}
                                        alt={`Оборудование ${i + 1}`}
                                        width={1400}
                                        height={800}
                                        className="w-full h-[380px] sm:h-[480px] lg:h-[620px] object-cover rounded-3xl"
                                        priority={i < 2}
                                    />
                                </div>
                            ))}
                        />
                    </div>

                    {/* Карточки оборудования */}
                    {/* Все карточки в одной сетке */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Заголовки делаем как полноценные карточки-заголовки, занимающие всю ширину колонки */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-gray-800">
                                Диагностика
                            </h3>
                            <div className="space-y-6">
                                {diagnostics.map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-200 h-full">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-lg text-gray-600 mb-2">{item.model}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-gray-800">
                                Лаборатория
                            </h3>
                            <div className="space-y-6">
                                {diagnostics.map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-200 h-full">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-lg text-gray-600 mb-2">{item.model}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-center mb-10 text-gray-800">
                                Реабилитация
                            </h3>
                            <div className="space-y-6">
                                {rehabilitation.map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-200 h-full">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-lg text-gray-600 mb-2">{item.model}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};