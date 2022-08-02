import { Router } from "express";
import orderGetPayedController from "../../../controllers/webhook/QTickets/orderGetPayed.controller";

const orderGetPayedRouter = Router();

orderGetPayedRouter.post("/", orderGetPayedController);

export default orderGetPayedRouter;
