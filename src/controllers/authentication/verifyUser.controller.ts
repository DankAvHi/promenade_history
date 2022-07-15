import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const verifyUserController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.isAuthenticated()) {
               return res.status(403).json({ error: "Unauth" });
          }

          res.json({ succes: true, vkid: req.user.id });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default verifyUserController;
