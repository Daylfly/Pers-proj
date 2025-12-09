"use client";

import { Slider } from "@/components/ui/slider/slider";
import Container from "@/components/shared/container";
import Image from "next/image";

export const BlogUi = () => {
    const posts = [
        {
            id: 1,
            tag: "3D визуализация",
            title: "Профилактика сердечно-сосудистых заболеваний",
            text: "Простые правила, которые помогут сохранить здоровье сердца на долгие годы. Рекомендации от наших кардиологов.",
            author: "Иванова Е.С.",
            date: "18 ноября 2025",
            img: "./../../statics/blog/doctor-team.png",
        },
        {
            id: 2,
            tag: "Диагностика",
            title: "МРТ или КТ: какое исследование выбрать",
            text: "Разбираемся в различиях между методами лучевой диагностики и определяем, когда какое исследование наиболее эффективно.",
            author: "Иванова Е.С.",
            date: "22 ноября 2025",
            img: "./../../statics/blog/lab.png",
        },
        {
        id: 3,
            tag: "3D визуализация",
            title: "Профилактика сердечно-сосудистых заболеваний",
            text: "Простые правила, которые помогут сохранить здоровье сердца на долгие годы. Рекомендации от наших кардиологов.",
            author: "Иванова Е.С.",
            date: "18 ноября 2025",
            img: "./../../statics/blog/doctor-team.png",
    },
        {
            id: 4,
            tag: "Диагностика",
            title: "МРТ или КТ: какое исследование выбрать",
            text: "Разбираемся в различиях между методами лучевой диагностики и определяем, когда какое исследование наиболее эффективно.",
            author: "Иванова Е.С.",
            date: "22 ноября 2025",
            img: "./../../statics/blog/lab.png",
        },
    ];

    return (
        <Container>
            <section className="py-12 md:py-16 relative">
                <h2 className="text-center text-4xl font-semibold mb-3">Блог</h2>
                <p className="text-center text-gray-600 mb-8">
                    Полезные статьи о здоровье от наших специалистов
                </p>

                <Slider
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    slides={posts.map((post) => (
                        <div
                            key={post.id}
                            className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm border"
                        >
                            <div className="h-64 relative w-full">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6 space-y-3">
                                <span className="text-xs inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md w-max">
                                    {post.tag}
                                </span>

                                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm">{post.text}</p>

                                <div className="flex items-center gap-4 pt-2 text-gray-500 text-sm">
                                    <div className="flex items-center gap-1">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M3 17c2-3 10-3 12 0"></path>
                                        </svg>
                                        {post.author}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 4h12M5 8h8M7 12h4"></path>
                                        </svg>
                                        {post.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                    className="px-10"
                />
            </section>
        </Container>
    );
};

export default BlogUi;
