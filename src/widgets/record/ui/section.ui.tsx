// RecordUi.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RecordProps, RecordFormValues } from "./record";
import Container from "@/components/shared/container";
import doctorImg from "@/../public/statics/Doctor.png";

export const RecordUi: React.FC<RecordProps> = ({ className, onSubmit }) => {
    const [values, setValues] = useState<RecordFormValues>({
        name: "",
        email: "",
        phone: "",
        date: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(values);
    };

    return (
        <section id="record" className={cn("py-16 sm:py-20 lg:py-[120px]", className)}>
            <Container>
                <h2 className="text-center text-4xl md:text-5xl font-semibold mb-14">
                    Запись
                </h2>

                <div className="bg-white border rounded-[40px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {/* Форма */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <h3 className="text-2xl font-semibold mb-6">
                            Записаться на консультацию
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Имя */}
                            <div>
                                <label className="block mb-2 text-black">Ваше Имя</label>
                                <input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Ваше Имя"
                                    className="w-full bg-gray-100 border rounded-full py-3 px-5 focus:outline-none"
                                />
                            </div>

                            {/* Почта */}
                            <div>
                                <label className="block mb-2 text-black">Ваша Почта</label>
                                <input
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Ваша Почта"
                                    className="w-full bg-gray-100 border rounded-full py-3 px-5 focus:outline-none"
                                />
                            </div>

                            {/* Телефон */}
                            <div>
                                <label className="block mb-2 text-black">Ваш Телефон</label>
                                <input
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (___) ___-__-__"
                                    className="w-full bg-gray-100 border rounded-full py-3 px-5 focus:outline-none"
                                />
                            </div>

                            {/* Дата */}
                            <div>
                                <label className="block mb-2 text-black">Дата записи</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={values.date}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border rounded-full py-3 px-5 focus:outline-none"
                                />
                            </div>

                            {/* Чекбокс */}
                            <label className="flex items-center gap-2 text-sm text-black/70">
                                <input type="checkbox" className="w-4 h-4" />
                                Я ознакомлен с политикой конфиденциальности
                            </label>

                            {/* Кнопка */}
                            <button
                                type="submit"
                                className="w-full cursor-pointer bg-black text-white py-3 rounded-full text-lg"
                            >
                                Записаться
                            </button>
                        </form>
                    </div>

                    {/* Фото врача */}
                    <div className="relative">
                        <Image
                            src={doctorImg}
                            alt="doctor"
                            width={600}   // указываем реальные размеры
                            height={800}  // указываем реальные размеры
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
