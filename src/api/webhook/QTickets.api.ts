import { Router } from "express";
import {
     WEBHOOK_QTICKETS_NEW_ORDER_ROUTE,
     WEBHOOK_QTICKETS_ORDER_CHANGED_ROUTE,
     WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE,
     WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE,
} from "../../../shared/routes/api/api.shared";
import newOrderController from "../../controllers/webhook/QTickets/newOrder.controller";
import orderChangedController from "../../controllers/webhook/QTickets/orderChanged.controller";
import orderDeletedController from "../../controllers/webhook/QTickets/orderDeleted.controller";
import orderGetPayedController from "../../controllers/webhook/QTickets/orderGetPayed.controller";
import checkSignature from "../../middlewares/QTickets/checkSignature.middleware";

const QTicketsRouter = Router();

QTicketsRouter.use(checkSignature);

QTicketsRouter.post(WEBHOOK_QTICKETS_NEW_ORDER_ROUTE, newOrderController);
QTicketsRouter.post(WEBHOOK_QTICKETS_ORDER_GET_PAYED_ROUTE, orderGetPayedController);
QTicketsRouter.post(WEBHOOK_QTICKETS_ORDER_DELETED_ROUTE, orderDeletedController);
QTicketsRouter.post(WEBHOOK_QTICKETS_ORDER_CHANGED_ROUTE, orderChangedController);

export default QTicketsRouter;
