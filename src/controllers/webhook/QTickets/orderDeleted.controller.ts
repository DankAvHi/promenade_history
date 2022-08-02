import { RequestHandler } from "express";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";

const orderDeletedController: RequestHandler = async (req, res, next) => {
     try {
          console.log("deleted");
          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default orderDeletedController;
