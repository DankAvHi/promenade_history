import { Router } from "express";
import { AUTH_ROUTE, PROFILE_ROUTE } from "../../shared/routes/api/api.shared";
import authenticationRouter from "./authentication/authentication.api";
import profileRouter from "./profile/profile.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authenticationRouter);
apiRouter.use(PROFILE_ROUTE, profileRouter);

export default apiRouter;
