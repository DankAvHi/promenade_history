import { RequestHandler } from "express";
import { VerifyUserResponse } from "../../../shared/interfaces/api/verifyUser.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const verifyUserController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.isAuthenticated()) {
               return res.status(403).json({ error: "Unauth" });
          }

          const response: VerifyUserResponse = {
               succes: true,
               email: req.user.email,
          };

          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default verifyUserController;
