import { Router } from "express";
import newOrderController from "../../../controllers/webhook/QTickets/newOrder.controller";

const newOrderRouter = Router();

newOrderRouter.post("/", newOrderController);

export default newOrderRouter;
