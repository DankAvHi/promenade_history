import { Router } from "express";
import verifyUserController from "../../controllers/authentication/verifyUser.controller";

const verifyUserRouter = Router();

verifyUserRouter.get("/", verifyUserController);

export default verifyUserRouter;
