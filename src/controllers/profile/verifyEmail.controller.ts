import { RequestHandler } from "express";
import { VerifyEmailRequest, VerifyEmailResponse } from "../../../shared/interfaces/api/verifyEmail.shared";
import { VERIFY_EMAIL_INCORRECT_CODE, VERIFY_EMAIL_NO_CODE_ERROR } from "../../../shared/routes/api/api.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const verifyEmailController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return res.status(403).json({ error: "Unauth" });
          }
          const { verifyCode }: VerifyEmailRequest = req.body;
          if (!verifyCode) {
               return res.status(409).json({ error: VERIFY_EMAIL_NO_CODE_ERROR });
          }

          const unverifyedEmail = req.session.unverifyedEmail;

          if (!(verifyCode === req.session.verifyCode)) {
               return res.status(409).json({ error: VERIFY_EMAIL_INCORRECT_CODE });
          }

          await prisma.user.update({
               where: {
                    vkid: req.user.vkid,
               },
               data: {
                    email: unverifyedEmail,
               },
          });

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

export default verifyEmailController;
