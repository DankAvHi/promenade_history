import { Router } from "express";
import { AUTH_LOGOUT_ROUTE, AUTH_VERIFYUSER_ROUTE, AUTH_VKONTAKTE_ROUTE } from "../../../shared/routes/api/api.shared";
import logoutController from "../../controllers/authentication/logout.controller";
import verifyUserController from "../../controllers/authentication/verifyUser.controller";
import alreadyLoginCheck from "../../middlewares/authentication/alreadyLoginCheck.middleware";
import vkontakteRouter from "./vkontakte.api";

const authenticationRouter = Router();

authenticationRouter.use(AUTH_VKONTAKTE_ROUTE, alreadyLoginCheck, vkontakteRouter);
authenticationRouter.get(AUTH_VERIFYUSER_ROUTE, verifyUserController);
authenticationRouter.delete(AUTH_LOGOUT_ROUTE, logoutController);

export default authenticationRouter;
