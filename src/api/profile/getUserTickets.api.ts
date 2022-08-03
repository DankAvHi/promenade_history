import { Router } from "express";
import getUserTicketsController from "../../controllers/profile/getUserTickets.controller";

const getUserTicketsRouter = Router();

getUserTicketsRouter.get("/", getUserTicketsController);

export default getUserTicketsRouter;
