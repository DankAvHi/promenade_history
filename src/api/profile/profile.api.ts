import { Router } from "express";
import {
     CANCEL_EMAIL_CHANGE_ROUTE,
     CHANGE_EMAIL_ROUTE,
     CHECK_EMAIL_VERIFICATION_ROUTE,
     GET_USER_DATA_ROUTE,
     GET_USER_TICKETS_ROUTE,
     VERIFY_EMAIL_ROUTE,
} from "../../../shared/routes/api/api.shared";
import cancelEmailChangeController from "../../controllers/profile/cancelEmailChange.controller";
import changeEmailController from "../../controllers/profile/changeEmail.controller";
import checkEmailVerificationController from "../../controllers/profile/checkEmailVerification.controller";
import getUserDataController from "../../controllers/profile/getUserData.controller";
import getUserTicketsController from "../../controllers/profile/getUserTickets.controller";
import verifyEmailController from "../../controllers/profile/verifyEmail.controller";
import verifyUser from "../../middlewares/authentication/verifyUser.middleware";

const profileRouter = Router();
profileRouter.use(verifyUser);

profileRouter.get(GET_USER_DATA_ROUTE, getUserDataController);
profileRouter.post(CHANGE_EMAIL_ROUTE, changeEmailController);
profileRouter.get(GET_USER_TICKETS_ROUTE, getUserTicketsController);
profileRouter.post(VERIFY_EMAIL_ROUTE, verifyEmailController);
profileRouter.get(CHECK_EMAIL_VERIFICATION_ROUTE, checkEmailVerificationController);
profileRouter.get(CANCEL_EMAIL_CHANGE_ROUTE, cancelEmailChangeController);

export default profileRouter;
