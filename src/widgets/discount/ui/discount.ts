

export type Discount = {
    id: number;
    subtitle: string;
    title: string;
    description: string;
};

export const DiscountData: Discount[] = [
    {
        id: 1,
        subtitle:"30%",
        title: 'Welcome bonus',
        description:
            "Get 30% off your first session when you register an account with us."},
    {
        id: 2,
        subtitle:"20%",
        title: 'Birthday discount',
        description:
            "Celebrate your special day with 20% off the entire menu food, drinks, and gaming!"},
    {
        id: 3,
        subtitle:"1 hour",
        title: '1 Free hour',
        description:
            "Follow us on social media and claim a complimentary gaming hour on us!"},
];