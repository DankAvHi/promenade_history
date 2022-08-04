import { RequestHandler } from "express";
import { ChangeEmailRequest, ChangeEmailResponse } from "../../../shared/interfaces/api/changeEmail.shared";
import { CHANGE_EMAIL_INVALID_EMAIL_ERROR } from "../../../shared/routes/api/api.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import validateEmail from "../../functions/profile/validateEmail";
import { EMAIL_ADDRES } from "../../setup/setupConfig";
import { transporter } from "../../setup/setupNodemailer";
import prisma from "../../setup/setupPrismaConnection";

const changeEmailController: RequestHandler = async (req, res, next) => {
     try {
          const { email }: ChangeEmailRequest = req.body;
          if (!req.user || !email) {
               return res.status(409).json({ error: "Wrong Data" });
          }

          if (!validateEmail(email)) {
               return res.status(409).json({ error: CHANGE_EMAIL_INVALID_EMAIL_ERROR });
          }

          const isEmailExisted = await prisma.user.findFirst({ where: { email: email } });

          if (isEmailExisted) {
               return res.status(409).json({ error: "email existed" });
          }

          req.session.unverifyedEmail = email;

          const verifyCode = Math.floor(Math.random() * (99999 - 10000) + 10000);

          req.session.verifyCode = verifyCode;

          const letter = await transporter.sendMail({
               from: `Promenade History ${EMAIL_ADDRES}`,
               to: `${email}`,
               subject: `Подтверждение электронной почты `,
               text: `Для подтверждения вашей электронной почты, введите этот код на странице подтверждения: ${verifyCode}`,
          });

          const response: ChangeEmailResponse = {
               succes: true,
          };
          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default changeEmailController;
