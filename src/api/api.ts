import { Router } from "express";
import authenticationRouter from "./authentication/authentication.api";

const apiRouter = Router();

apiRouter.use("/authentication", authenticationRouter);

export default apiRouter;
