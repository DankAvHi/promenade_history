import { Router } from "express";
import changeEmailController from "../../controllers/profile/changeEmail.controller";

const changeEmailRouter = Router();

changeEmailRouter.post("/", changeEmailController);

export default changeEmailRouter;
