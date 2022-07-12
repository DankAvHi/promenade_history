import { Router } from "express";
import { AUTH_LOGOUT_ROUTE, AUTH_VERIFYUSER_ROUTE, AUTH_VKONTAKTE_ROUTE } from "../../../shared/routes/api/api.shared";
import logoutRouter from "./logout.api";
import verifyUserRouter from "./verifyUser.api";
import vkontakteRouter from "./vkontakte.api";

const authenticationRouter = Router();

authenticationRouter.use(AUTH_VKONTAKTE_ROUTE, vkontakteRouter);
authenticationRouter.use(AUTH_VERIFYUSER_ROUTE, verifyUserRouter);
authenticationRouter.use(AUTH_LOGOUT_ROUTE, logoutRouter);

export default authenticationRouter;
