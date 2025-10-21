
export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export const FaqData: FaqItem[] = [
    {
        id: 1,
        question: "What's Under the Hood at Middy",
        answer:
            "Is a premium cyber lounge equipped with top-tier gaming hardware and elite wireless peripherals. Conveniently located in the heart of Moscow—just steps .",
    },
    {
        id: 2,
        question: "Does Middy offer hookah and food?",
        answer: "Yes! We offer a curated selection of premium hookah flavors and a menu of delicious snacks, meals, and drinks to keep you fueled during long gaming sessions.",
    },
    {
        id: 3,
        question: "What refresh rate do the monitors have?",
        answer: "All our monitors feature a minimum refresh rate of 144Hz, with many running at 240Hz for ultra-smooth gameplay — perfect for competitive shooters and fast-paced titles.",
    },
    {
        id: 4,
        question: "Where is Middy located?",
        answer: "We’re located in central Moscow, just steps from Novoslobodskaya and Mendeleevskaya metro stations — easy to reach whether you're coming from work, school, or home.",
    },
    {
        id: 5,
        question: "How much does an hour cost?",
        answer: "Our rates start at just ₽110 per hour — affordable premium gaming without compromise. Check our website for current promotions and membership discounts!",
    },
];