import { Router } from "express";
import passport from "passport";
import authenticationVkontakteController from "../../controllers/authenticationVkontakte/authenticationVkontakte.controller";

const vkontakteRouter = Router();

vkontakteRouter.get("/", passport.authenticate("vkontakte"));

vkontakteRouter.get("/callback", passport.authenticate("vkontakte"), authenticationVkontakteController);

export default vkontakteRouter;
