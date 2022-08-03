import { RequestHandler } from "express";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";
import prisma from "../../../setup/setupPrismaConnection";
import { newOrderRequest } from "./QTickets";

const orderDeletedController: RequestHandler = async (req, res, next) => {
     try {
          const { id }: newOrderRequest = req.body;

          await prisma.ticket.deleteMany({ where: { order_id: id } });

          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default orderDeletedController;
