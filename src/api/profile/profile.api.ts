import { Router } from "express";
import { GET_USER_DATA_ROUTE } from "../../../shared/routes/api/api.shared";
import getUserDataController from "../../controllers/profile/getUserData.controller";
import verifyUser from "../../middlewares/authentication/verifyUser.middleware";

const profileRouter = Router();
profileRouter.use(verifyUser);

profileRouter.get(GET_USER_DATA_ROUTE, getUserDataController);

export default profileRouter;
