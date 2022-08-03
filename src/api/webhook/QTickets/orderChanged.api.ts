import { Router } from "express";
import orderChangedController from "../../../controllers/webhook/QTickets/orderChanged.controller";

const orderChangedRouter = Router();

orderChangedRouter.post("/", orderChangedController);

export default orderChangedRouter;
