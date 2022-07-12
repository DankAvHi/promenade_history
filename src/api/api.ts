import { Router } from "express";
import { AUTH_ROUTE } from "../../shared/routes/api/api.shared";
import authenticationRouter from "./authentication/authentication.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authenticationRouter);

export default apiRouter;
