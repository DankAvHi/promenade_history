import { RequestHandler } from "express";
import requestServerError from "../../../errors/requestServerError/requestServerError.error";

const newOrderController: RequestHandler = async (req, res, next) => {
     try {
          console.log("new order");
          res.json({ succes: true });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default newOrderController;
