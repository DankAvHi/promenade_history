import { RequestHandler } from "express";
import { GetUserTicketsResponse, TicketsData } from "../../../shared/interfaces/api/getUserTickets.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const getUserTicketsController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return res.status(403).json({ error: "Unauth" });
          }

          const user = await prisma.user.findUnique({
               where: {
                    vkid: req.user.iduser,
               },
          });
          if (!user) {
               return res.status(403).json({ error: "user doesnt existed" });
          }

          const tickets: TicketsData = (await prisma.ticket.findMany({ where: { vkid: user.vkid } })).map((ticket) => {
               return {
                    name: ticket.name,
                    number: ticket.idticket,
                    isActive: Boolean(ticket.is_active),
                    description: ticket.description,
               };
          });

          const response: GetUserTicketsResponse = {
               succes: true,
               tickets,
          };
          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default getUserTicketsController;
