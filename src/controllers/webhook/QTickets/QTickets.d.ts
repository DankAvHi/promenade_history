export type newOrderRequest = {
     id: number;
     payed: boolean;
     client: {
          email: string;
     };
     baskets: {
          id: number;
          seat_name: string;
          deleted_at: string | null;
     }[];
};

export type Ticket = {
     idticket: number;
     name: string;
     order_id: number;
     vkid: number | null;
     payed: boolean;
     is_active: boolean;
     description: string;
};
export type Tickets = Ticket[];
