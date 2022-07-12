import { Router } from "express";
import passport from "passport";
import { AUTH_VKONTAKTE_CALLBACK_ROUTE } from "../../../shared/routes/api/api.shared";
import vkontakteController from "../../controllers/authentication/vkontakte.controller";

const vkontakteRouter = Router();

vkontakteRouter.get("/", passport.authenticate("vkontakte"));

vkontakteRouter.get(AUTH_VKONTAKTE_CALLBACK_ROUTE, passport.authenticate("vkontakte"), vkontakteController);

export default vkontakteRouter;
