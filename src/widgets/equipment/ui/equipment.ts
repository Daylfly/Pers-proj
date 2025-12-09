export const equipmentData = {
    title: "Современное оборудование",
    subtitle: "Используем новейшие технологии и оборудование ведущих мировых производителей",

    images: {
        left: "/equipment/mri.jpg",        // положи свои фото в public/equipment/
        right: "/equipment/c-arm.jpg",
    },

    diagnostics: [
        {
            title: "МРТ аппарат",
            model: "Siemens MAGNETOM 3T - новейший томограф для точной диагностики",
            description: "Высокое разрешение, быстрое сканирование",
        },
        {
            title: "КТ сканер",
            model: "Philips IQon Spectral CT - спектральная компьютерная томография",
            description: "128 срезов, низкая доза облучения",
        },
    ],

    laboratory: [
        {
            title: "Биохимический анализатор",
            model: "Roche Cobas 8000 - автоматизированная лабораторная система",
            description: "Высокая точность, быстрые результаты",
        },
        {
            title: "Гематологический анализатор",
            model: "Sysmex XN-9000 - анализ крови экспертного уровня",
            description: "Полный анализ за 60 секунд",
        },
    ],

    rehabilitation: [
        {
            title: "Аппарат для физиотерапии",
            model: "BTL-4000 Smart - комплексная физиотерапия",
            description: "Многофункциональная терапия",
        },
        {
            title: "Роботизированная система",
            model: "Lokomat - роботизированная ходьба поддержка",
            description: "Восстановление двигательных функций",
        },
    ],
} as const;