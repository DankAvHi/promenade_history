import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const verifyUser: RequestHandler = async (req, res, next) => {
     try {
          if (req.isAuthenticated()) {
               return next();
          }
          res.status(403).json({ error: "unauth" });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default verifyUser;
