import { RequestHandler } from "express";
import { CheckEmailVerificationResponse } from "../../../shared/interfaces/api/checkEmailVerification.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const checkEmailVerificationController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return res.status(403).json({ error: "Unauth" });
          }

          const isEmailVerified = !!!req.session.unverifyedEmail;

          const response: CheckEmailVerificationResponse = {
               succes: true,
               isEmailVerified,
          };
          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default checkEmailVerificationController;
