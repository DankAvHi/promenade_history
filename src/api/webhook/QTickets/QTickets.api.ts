import { Router } from "express";
import {
     WEBHOOK_QTICKETS_NEW_ORDER_ROUTE,
     WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE,
     WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE,
} from "../../../../shared/routes/api/api.shared";
import newOrderRouter from "./newOrder.api";
import orderDeletedRouter from "./orderDeleted.api";
import orderGetPayedRouter from "./orderGetPayed.api";

const QTicketsRouter = Router();

QTicketsRouter.use(WEBHOOK_QTICKETS_NEW_ORDER_ROUTE, newOrderRouter);
QTicketsRouter.use(WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE, orderGetPayedRouter);
QTicketsRouter.use(WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE, orderDeletedRouter);

export default QTicketsRouter;
