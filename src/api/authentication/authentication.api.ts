import { Router } from "express";
import vkontakteRouter from "./vkontakte.api";

const authenticationRouter = Router();

authenticationRouter.use("/vkontakte", vkontakteRouter);

export default authenticationRouter;
