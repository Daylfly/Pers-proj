import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/shared/container";
import { cn } from "@/lib/utils";

export default function ContactsSection() {
    const contacts = [
        {
            icon: MapPin,
            title: "Адрес",
            lines: ["г. Волгоград,", "ул. Нестерова, д. 1Д"],
        },
        {
            icon: Phone,
            title: "Телефон",
            lines: ["+7 (999) 700-55-50", "+7 (999) 200-33-30"],
        },
        {
            icon: Mail,
            title: "Почта",
            lines: ["info@heal.ru", "doctor@heal.ru"],
        },
        {
            icon: Clock,
            title: "Режим работы",
            lines: ["Пн-Пт: 8:00 - 20:00", "Сб-Вс: 9:00 - 18:00"],
        },
    ];

    return (
        <section id="contact" className="py-12 md:py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800">
                        Контакты
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Свяжитесь с нами удобным для вас способом
                    </p>
                </div>

                {/* Карточки контактов */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {contacts.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6  border-2  cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-5">
                                    <Icon className="w-7 h-7 text-black" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>

                                <div className="space-y-1">
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-gray-600 text-base leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}