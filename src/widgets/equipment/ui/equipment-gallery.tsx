"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

export default function EquipmentGallery({ slides }: { slides: React.ReactNode[] }) {
    return (
        <div className="relative group">
            {/* Минималистичные стрелки — появляются при наведении */}
            <button className="swiper-button-prev-eq opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center transition-all hover:bg-white hover:scale-110">
                <ChevronLeft size={28} className="text-gray-800" />
            </button>
            <button className="swiper-button-next-eq opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center transition-all hover:bg-white hover:scale-110">
                <ChevronRight size={28} className="text-gray-800" />
            </button>

            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={800}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev-eq",
                    nextEl: ".swiper-button-next-eq",
                }}
                className="rounded-3xl overflow-hidden"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}