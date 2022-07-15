import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const logoutController: RequestHandler = async (req, res, next) => {
     try {
          req.logout((err) => {
               res.clearCookie("connect.sid");
               req.session.destroy((err) => {
                    res.redirect("/");
               });
          });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default logoutController;
