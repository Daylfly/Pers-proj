import dollar from "../../../../public/statics/dollar.png";
import micro from "../../../../public/statics/micro.png";
import home from "../../../../public/statics/home.png";

export type Choose = {
    id: number;
    icon: any; // или string, если используете пути
    title: string;
    description: string;
};

export const ChooseData: Choose[] = [
    {
        id: 1,
        icon: home,
        title: 'Atmosphere',
        description:
            'Step into a cosmic environment designed for total immersion. At Middy, the boundary between reality and the virtual world fades away—surround yourself with futuristic design, dynamic lighting, and an otherworldly vibe that pulls you deep into the game.',
    },
    {
        id: 2,
        icon: dollar,
        title: 'Great Value',
        description:
            'Premium gaming doesn’t have to cost a fortune. Our rates start at just ₽110 per hour, so you get maximum enjoyment at a minimal price—without compromising on quality or experience.',
    },
    {
        id: 3,
        icon: micro,
        title: 'Top-Tier Hardware',
        description:
            'We’re powered by elite gear: high-performance PCs equipped with NVIDIA RTX 3070 Ti and 3080 Ti graphics cards deliver ultra-smooth gameplay and stunning visuals. Paired with pro-grade peripherals, every setup is built for comfort, speed, and victory.',
    },
];