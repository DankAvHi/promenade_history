import { Router } from "express";
import getUserDataController from "../../controllers/profile/getUserData.controller";

const getUserDataRouter = Router();

getUserDataRouter.get("/", getUserDataController);

export default getUserDataRouter;
