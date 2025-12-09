// src/widgets/promotions/ui/Promotions.ts

export const promotionsData = {
    title: "Акции и специальные предложения",
    subtitle: "Воспользуйтесь выгодными предложениями для заботы о своём здоровье",

    items: [
        {
            badge: "Новинка",
            discount: "%",
            title: "Скидка 20% на первое посещение",
            description: "Для новых пациентов скидка на первичную консультацию и диагностику",
            footer: "До 31 декабря 2025",
            permanent: false,
        },
        {
            badge: "Популярное",
            discount: "%",
            title: "Комплексное обследование",
            description: "Полное обследование организма со скидкой 30% и бонусной системой",
            footer: "Постоянная акция",
            permanent: true,
        },
    ],
} as const;