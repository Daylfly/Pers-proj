"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReservationFormData, ReservationPromoData } from './reservation';
import { useState } from 'react';

interface IReservationProps {
    className?: string;
}

export const SectionUi: React.FC<IReservationProps> = ({ className }) => {
    const [formData, setFormData] = useState({
        phone: '',
        datetime: '',
        zone: '',
        players: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Здесь будет логика отправки формы
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <section id="Booking" className={cn("w-full  text-white", className)}>
            <Container>
                <div className="pt-10 sm:pt-16 md:pt-24 lg:pt-32">
                    <div className="flex flex-col items-center">


                        {/* Заголовок */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 uppercase">
                            {ReservationPromoData.title}
                        </h2>

                        {/* Промо заголовок */}
                        <div className="mb-12 text-center">
                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
                                <span className="text-primary">{ReservationPromoData.headline.bonus.split(' ')[0]}</span>
                                <span className="text-primary ml-2">{ReservationPromoData.headline.bonus.split(' ').slice(1).join(' ')}</span>
                            </h3>
                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
                                {ReservationPromoData.headline.guests}
                            </h3>
                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
                                {ReservationPromoData.headline.account}
                            </h3>
                        </div>

                        {/* Центрированная форма */}
                        <div className="w-full max-w-md">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Телефон */}
                                <div>
                                    <Input
                                        type="text"
                                        placeholder={ReservationFormData[0].placeholder}
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full h-12 bg-white/10 border border-white/20 text-white placeholder:text-white focus:border-primary"
                                    />
                                </div>

                                {/* Дата и время */}
                                <div>
                                    <Input
                                        type="datetime-local"
                                        placeholder={ReservationFormData[1].placeholder}
                                        value={formData.datetime}
                                        onChange={(e) => handleInputChange('datetime', e.target.value)}
                                        className="w-full h-12 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:border-primary"
                                    />
                                </div>

                                {/* Зона и Количество игроков */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <select
                                            value={formData.zone}
                                            onChange={(e) => handleInputChange('zone', e.target.value)}
                                            className="w-full h-12 bg-white/10 border border-white/20 text-white rounded-md px-3 focus:border-primary focus:outline-none"
                                        >
                                            <option value="" className="text-white/60 bg-white">{ReservationFormData[2].placeholder}</option>
                                            {ReservationFormData[2].options?.map((option) => (
                                                <option key={option} value={option} className="text-white bg-gray-400">{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            value={formData.players}
                                            onChange={(e) => handleInputChange('players', e.target.value)}
                                            className="w-full h-12 bg-white/10 border border-white/20 text-white rounded-md px-3 focus:border-primary focus:outline-none"
                                        >
                                            <option value="" className="text-white/60 bg-white">{ReservationFormData[3].placeholder}</option>
                                            {ReservationFormData[3].options?.map((option) => (
                                                <option key={option} value={option} className="text-white bg-gray-400">{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Кнопка отправки */}
                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-transparent border-2 border-primary text-white cursor-pointer hover:bg-primary/10 transition-all font-medium"
                                >
                                    {ReservationPromoData.buttonText}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
