import { Router } from "express";
import verifyUserRouter from "./verifyUser.api";
import vkontakteRouter from "./vkontakte.api";

const authenticationRouter = Router();

authenticationRouter.use("/vkontakte", vkontakteRouter);
authenticationRouter.use("/verifyUser", verifyUserRouter);

export default authenticationRouter;
