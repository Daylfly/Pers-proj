import doc1 from "../../../../public/statics/doctors/doc1.png";
import doc2 from "../../../../public/statics/doctors/doc2.png";
import doc3 from "../../../../public/statics/doctors/doc3.png";

export type Doctor = {
    name: string;
    position: string;
    experience: string;
    degree: string;
    image: typeof doc1;
};

export const DoctorsData: Doctor[] = [
    {
        name: "Иванова Елена Сергеевна",
        position: "Кардиолог",
        experience: "10 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc1,
    },
    {
        name: "Петрова Ирина Алексеевна",
        position: "Невролог",
        experience: "15 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc2,
    },
    {
        name: "Иванова Елена Сергеевна",
        position: "Ортопед",
        experience: "20 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc3,
    },
    {
        name: "Иванова Елена Сергеевна",
        position: "Кардиолог",
        experience: "10 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc1,
    },
    {
        name: "Петрова Ирина Алексеевна",
        position: "Невролог",
        experience: "15 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc2,
    },
    {
        name: "Иванова Елена Сергеевна",
        position: "Ортопед",
        experience: "20 лет опыта",
        degree: "Доктор медицинских наук",
        image: doc3,
    },
];
