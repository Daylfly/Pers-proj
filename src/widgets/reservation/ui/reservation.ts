export type ReservationForm = {
    id: number;
    label: string;
    placeholder: string;
    type: 'text' | 'datetime-local' | 'select';
    options?: string[];
};

export const ReservationFormData: ReservationForm[] = [
    {
        id: 1,
        label: "Phone",
        placeholder: "Phone",
        type: "text"
    },
    {
        id: 2,
        label: "Date and Time",
        placeholder: "Date and Time",
        type: "datetime-local"
    },
    {
        id: 3,
        label: "Choose Zone",
        placeholder: "Choose Zone",
        type: "select",
        options: ["Gaming Zone 1", "Gaming Zone 2", "Gaming Zone 3", "VIP Zone"]
    },
    {
        id: 4,
        label: "Number of Players",
        placeholder: "Number of Players",
        type: "select",
        options: ["1", "2", "3", "4", "5", "6+"]
    }
];

export const ReservationPromoData = {
    title: "BOOKING",
    headline: {
        bonus: "30% BONUS FOR NEW",
        guests: "GUESTS UPON REGISTRATION",
        account: "ACCOUNT"
    },
    description: [],
    buttonText: "Book Now"
};
