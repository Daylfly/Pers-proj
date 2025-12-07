export type Service = {
    title: string;
    description: string;
    icon: string; // просто ключ, а компонент подставим в UI
};

export const ServiceData: Service[] = [
    {
        title: "Терапия",
        description: "Первичная диагностика и лечение широкого спектра заболеваний",
        icon: "stethoscope",
    },
    {
        title: "Кардиология",
        description: "Диагностика и лечение сердечно-сосудистых заболеваний",
        icon: "heartPulse",
    },
    {
        title: "Неврология",
        description: "Диагностика и лечение заболеваний нервной системы",
        icon: "brain",
    },
    {
        title: "Офтальмология",
        description: "Обследование зрения и лечение глазных заболеваний",
        icon: "eye",
    },
    {
        title: "Ортопедия",
        description: "Лечение заболеваний опорно-двигательного аппарата",
        icon: "bone",
    },
    {
        title: "Физиотерапия",
        description: "Современные методы физиотерапевтического лечения",
        icon: "activity",
    },
    {
        title: "Педиатрия",
        description: "Помощь детям от рождения до 18 лет",
        icon: "baby",
    },
    {
        title: "Лабораторная диагностика",
        description: "Широкий спектр лабораторных исследований",
        icon: "flaskConical",
    },
];
