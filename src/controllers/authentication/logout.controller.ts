import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import { HOME_PAGE_ROUTE } from "../../setup/setupConfig";

const logoutController: RequestHandler = async (req, res, next) => {
     try {
          const cookies = req.cookies;
          if (!cookies.token || !cookies.iduser) {
               return res.status(403).json({ error: "unregistered" });
          }
          res.clearCookie("token");
          res.clearCookie("iduser");
          res.redirect(HOME_PAGE_ROUTE);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default logoutController;
