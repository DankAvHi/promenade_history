import { RequestHandler } from "express";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";
import prisma from "../../../setup/setupPrismaConnection";
import { newOrderRequest } from "./QTickets";

const orderChangedController: RequestHandler = async (req, res, next) => {
     try {
          const { id, baskets }: newOrderRequest = req.body;

          for (let iterator = 0; iterator < baskets.length; iterator++) {
               const isTicketDeleted = !!baskets[iterator].deleted_at;
               const isTicketAlreadyDeleted = !!!(await prisma.ticket.findUnique({
                    where: { idticket: baskets[iterator].id },
               }));

               if (isTicketDeleted && !isTicketAlreadyDeleted) {
                    await prisma.ticket.delete({ where: { idticket: baskets[iterator].id } });
               }
          }

          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};
export default orderChangedController;
