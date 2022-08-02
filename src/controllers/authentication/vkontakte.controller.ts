import { RequestHandler } from "express";
import { SET_EMAIL_PAGE_ROUTE } from "../../../shared/routes/pages/pages.shared";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const vkontakteController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return req.logout((err) => {
                    res.clearCookie("connect.sid");
                    req.session.destroy((err) => {
                         res.json({ succes: true });
                    });
               });
          }

          if (req.user.email) {
               return res.redirect("/");
          }

          res.redirect(SET_EMAIL_PAGE_ROUTE);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default vkontakteController;
