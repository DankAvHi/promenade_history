import { Router } from "express";
import { AUTH_VKONTAKTE_CALLBACK_ROUTE } from "../../../shared/routes/api/api.shared";
import vkontakteController from "../../controllers/authentication/vkontakte.controller";
import { vkontakteAuthenticate } from "../../middlewares/authentication/vkontakteAuthentication.middleware";

const vkontakteRouter = Router();

vkontakteRouter.get("/", vkontakteAuthenticate);

vkontakteRouter.get(AUTH_VKONTAKTE_CALLBACK_ROUTE, vkontakteAuthenticate, vkontakteController);

export default vkontakteRouter;
