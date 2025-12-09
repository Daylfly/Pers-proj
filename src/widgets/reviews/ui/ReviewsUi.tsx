"use client";

import { Slider as ReviewsSlider } from "@/components/ui/slider/slider";
import { ReviewsData } from "../reviews.data";
import Container from "@/components/shared/container";
import Image from "next/image";
import { Star } from "lucide-react";
import ass from "./../akaev.png";

const Stars = ({ rating }: { rating: 5 | 4 }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
        ))}
    </div>
);

export const ReviewsUi = () => {
    const slides = ReviewsData.map((review) => (
        <div key={review.id} className="px-2">
            {/* ВСЯ КАРТОЧКА — КЛИКАБЕЛЬНАЯ ССЫЛКА */}
            <a
                href="https://volgograd.rzd-medicine.ru/doctors/akaev-umar-alievich"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-2xl bg-gray-150 border border-gray-300 p-4 md:p-6
                   hover:shadow-xl hover:border-gray-400
                   transition-all duration-300 cursor-pointer"
            >
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="font-semibold text-lg text-gray-900">{review.clientName}</h3>
                            <Stars rating={review.rating} />
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">{review.text}</p>
                    </div>

                    {/* Блок с доктором */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-18 h-18 rounded-sm overflow-hidden border-2 border-white">
                            <Image
                                src={ass}
                                alt={review.doctorName}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Доктор:</p>
                            <p className="font-medium text-gray-900">{review.doctorName}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    ));

    return (
        <Container className="bg-gray-50">
            <section className="py-16 sm:py-20 lg:py-[120px]">
                <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Отзывы клиентов
                </h2>

                <ReviewsSlider
                    slides={slides}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    navigation={false}
                    slidesPerView={1}
                    spaceBetween={25}
                    breakpoints={{
                        640: { slidesPerView: 1.15 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                />
            </section>
        </Container>
    );
};