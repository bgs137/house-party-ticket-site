export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    imageUrl: string;
}

export interface Ticket {
    eventId: string;
    quantity: number;
    buyerName: string;
    buyerEmail: string;
    paymentMethod: string;
}