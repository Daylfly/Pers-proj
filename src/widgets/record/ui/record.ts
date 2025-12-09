// record.ts

export interface RecordFormValues {
    name: string;
    email: string;
    phone: string;
    date: string;
}

export interface RecordProps {
    className?: string;
    onSubmit?: (values: RecordFormValues) => void;
}
