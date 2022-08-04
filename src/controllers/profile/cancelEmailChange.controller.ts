import { RequestHandler } from "express";
import { VerifyEmailResponse } from "../../../shared/interfaces/api/verifyEmail.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const cancelEmailChangeController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return res.status(403).json({ error: "Unauth" });
          }

          req.session.unverifyedEmail = null;
          req.session.verifyCode = null;

          const response: VerifyEmailResponse = {
               succes: true,
          };
          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default cancelEmailChangeController;
