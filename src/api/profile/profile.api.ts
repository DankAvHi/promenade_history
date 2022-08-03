import { Router } from "express";
import { CHANGE_EMAIL_ROUTE, GET_USER_DATA_ROUTE, GET_USER_TICKETS_ROUTE } from "../../../shared/routes/api/api.shared";
import verifyUser from "../../middlewares/authentication/verifyUser.middleware";
import changeEmailRouter from "./changeEmail.api";
import getUserDataRouter from "./getUserData.api";
import getUserTicketsRouter from "./getUserTickets.api";

const profileRouter = Router();
profileRouter.use(verifyUser);

profileRouter.use(GET_USER_DATA_ROUTE, getUserDataRouter);
profileRouter.use(CHANGE_EMAIL_ROUTE, changeEmailRouter);
profileRouter.use(GET_USER_TICKETS_ROUTE, getUserTicketsRouter);

export default profileRouter;
