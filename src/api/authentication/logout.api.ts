import { Router } from "express";
import logoutController from "../../controllers/authentication/logout.controller";

const logoutRouter = Router();

logoutRouter.get("/", logoutController);

export default logoutRouter;
