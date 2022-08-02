import { RequestHandler } from "express";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";

const orderGetPayedController: RequestHandler = async (req, res, next) => {
     try {
          console.log("get-payed");
          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default orderGetPayedController;
