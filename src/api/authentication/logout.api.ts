import { Router } from "express";
import logoutController from "../../controllers/authentication/logout.controller";

const logoutRouter = Router();

logoutRouter.delete("/", logoutController);

export default logoutRouter;
