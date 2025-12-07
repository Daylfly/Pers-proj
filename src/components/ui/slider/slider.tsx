"use client";
import type { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {
    slides: React.ReactNode[];
    spaceBetween?: number;
    slidesPerView?: number;
    breakpoints?: SwiperOptions["breakpoints"];    className?: string;
    navigation?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
                                                  slides,
                                                  spaceBetween = 20,
                                                  slidesPerView = 1,
                                                  breakpoints,
                                                  navigation = true,
                                                  className,
                                              }) => {
    return (
        <div className={`relative ${className}`}>
            {navigation && (
                <>
                    <div className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-4 text-3xl">
                        ‹
                    </div>

                    <div className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-4 text-3xl">
                        ›
                    </div>
                </>
            )}

            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
                navigation={
                    navigation
                        ? {
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }
                        : undefined
                }
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
