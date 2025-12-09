// src/components/reviews/reviews.data.ts
export type Review = {
    id: number;
    clientName: string;
    text: string;
    rating: 5 | 4; // только 5 или 4 звезды
    doctorName: string;
    doctorImage: string; // путь к фото врача
};

export const ReviewsData: Review[] = [
    {
        id: 1,
        clientName: "Дмитрий Вовк",
        text: "Был на приеме у эндокринолога. Хотят значить его профессионализм и тщательный подход к каждому пациенту!",
        rating: 5,
        doctorName: "Иванов Дмитрий Николаевич",
        doctorImage: "/akaev.png", // положишь свои фотки в public/doctors/
    },
    {
        id: 2,
        clientName: "Анна Сидорова",
        text: "Очень довольна консультацией! Доктор всё подробно объяснил, назначил правильное лечение. Спасибо большое!",
        rating: 5,
        doctorName: "Петрова Ольга Сергеевна",
        doctorImage: "/doctors/petrova.jpg",
    },
    {
        id: 3,
        clientName: "Алексей Козлов",
        text: "Прошёл полное обследование. Внимательный подход, современное оборудование. Рекомендую клинику!",
        rating: 5,
        doctorName: "Смирнов Алексей Петрович",
        doctorImage: "/doctors/smirnov.jpg",
    },
    {
        id: 4,
        clientName: "Мария Иванова",
        text: "Очень благодарна за помощь! Доктор выслушал все жалобы и нашёл причину недомогания. Здоровье вернулось!",
        rating: 5,
        doctorName: "Иванов Дмитрий Николаевич",
        doctorImage: "/doctors/ivanov.jpg",
    },
    {
        id: 5,
        clientName: "Сергей Морозов",
        text: "Отличный специалист! Назначенное лечение помогло уже через неделю. Спасибо за профессионализм!",
        rating: 5,
        doctorName: "Кузнецова Елена Викторовна",
        doctorImage: "/doctors/kuznetsova.jpg",
    },
];