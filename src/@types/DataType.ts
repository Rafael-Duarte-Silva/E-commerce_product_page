export type DataType = {
    id: number;
    image: {
        url: string;
        alt: string;
    };
    text: string;
    price: number;
    totalPrice?: number;
    amount?: number;
};