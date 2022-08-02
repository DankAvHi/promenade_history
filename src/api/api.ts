import { Router } from "express";
import { AUTH_ROUTE, PROFILE_ROUTE, WEBHOOK_ROUTE } from "../../shared/routes/api/api.shared";
import authenticationRouter from "./authentication/authentication.api";
import profileRouter from "./profile/profile.api";
import webhookRouter from "./webhook/webhook.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authenticationRouter);
apiRouter.use(PROFILE_ROUTE, profileRouter);
apiRouter.use(WEBHOOK_ROUTE, webhookRouter);

export default apiRouter;
