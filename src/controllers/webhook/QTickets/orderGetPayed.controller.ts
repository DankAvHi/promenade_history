import { RequestHandler } from "express";
import sleep from "../../../common/sleep/sleep.common";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";
import prisma from "../../../setup/setupPrismaConnection";
import { newOrderRequest, Tickets } from "./QTickets";

const orderGetPayedController: RequestHandler = async (req, res, next) => {
     try {
          await sleep(5000);
          const { id, payed, client, baskets }: newOrderRequest = req.body;

          const email: string = client.email;

          const user = await prisma.user.findFirst({ where: { email: email } });

          const vkid: number | null = user ? user.vkid : null;

          const tickets: Tickets = await Promise.all(
               baskets.map(async (basket) => {
                    const description = (await prisma.ticket_type.findFirst({ where: { name: basket.seat_name } }))
                         ?.description;
                    return {
                         name: basket.seat_name,
                         idticket: basket.id,
                         order_id: id,
                         vkid: vkid,
                         is_active: payed,
                         payed: payed,
                         description: description || "Нет Описания",
                    };
               })
          );

          for (let iterator = 0; iterator < tickets.length; iterator++) {
               const isOrderExisted = !!(await prisma.ticket.findUnique({
                    where: { idticket: tickets[iterator].idticket },
               }));

               if (isOrderExisted) {
                    await prisma.ticket.update({
                         where: { idticket: tickets[iterator].idticket },
                         data: {
                              payed: payed ? 1 : 0,
                         },
                    });
               } else {
                    await prisma.ticket.create({
                         data: {
                              idticket: tickets[iterator].idticket,
                              is_active: tickets[iterator].is_active ? 1 : 0,
                              name: tickets[iterator].name,
                              order_id: tickets[iterator].order_id,
                              payed: tickets[iterator].payed ? 1 : 0,
                              vkid: tickets[iterator].vkid,
                              description: tickets[iterator].description,
                         },
                    });
               }
          }

          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default orderGetPayedController;
