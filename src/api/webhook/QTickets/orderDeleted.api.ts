import { Router } from "express";
import orderDeletedController from "../../../controllers/webhook/QTickets/orderDeleted.controller";

const orderDeletedRouter = Router();

orderDeletedRouter.post("/", orderDeletedController);

export default orderDeletedRouter;
