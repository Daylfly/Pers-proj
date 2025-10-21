import coll from "../../../../public/statics/coll.png";

export type About = {
    id: number;
    icon: any; // или string, если используете пути
    title: string;
    description: string;
};

export const AboutData: About[] = [
    {
        id: 1,
        icon: coll,
        title: 'Little bit US',
        description:
"Middy is Volgograd’s premier cyber lounge, launched in 2022. Featuring six sleek, high-comfort gaming zones, we blend cutting-edge tech with a futuristic vibe to create an immersive gaming experience like no other. Beyond elite PCs and lightning-fast connectivity, Middy offers a stylish restaurant, a premium hookah lounge, and top-tier service—making it the ultimate destination for gamers, friends, and digital explorers alike."    },

];