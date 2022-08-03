export type TicketData = {
     name: string;
     number: number;
     isActive: boolean;
     description: string;
};
export type TicketsData = TicketData[];

export type GetUserTicketsResponse = { succes: boolean; tickets: TicketsData };
