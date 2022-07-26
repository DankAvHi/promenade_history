import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";

const vkontakteController: RequestHandler = async (req, res, next) => {
     try {
          res.redirect("/");
     } catch (e) {
          requestServerError(e, res);
     }
};

export default vkontakteController;
