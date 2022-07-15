import { RequestHandler } from "express";

const alreadyLoginCheck: RequestHandler = async (req, res, next) => {
     const { signedCookies = {} } = req;
     const { refreshToken } = signedCookies;

     if (typeof refreshToken != "undefined") {
          res.statusMessage = "already loged in";
          return res.status(409).json({ error: "already loged in" });
     }
     next();
};

export default alreadyLoginCheck;
