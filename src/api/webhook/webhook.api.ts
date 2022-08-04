import { Router } from "express";
import { WEBHOOK_QTICKETS_ROUTE } from "../../../shared/routes/api/api.shared";
import QTicketsRouter from "./QTickets.api";

const webhookRouter = Router();

webhookRouter.use(WEBHOOK_QTICKETS_ROUTE, QTicketsRouter);

export default webhookRouter;
