import crypto from "crypto";
import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import { QTICKETS_WEBHOOK_SIGNATURE_SECRET } from "../../setup/setupConfig";

const checkSignature: RequestHandler = async (req, res, next) => {
     try {
          if (!QTICKETS_WEBHOOK_SIGNATURE_SECRET) {
               throw new Error(`\n⛔[ERROR] QTickets signature secret doesn't provided in .env file\n`);
          }

          const sig = Buffer.from(req.get("X-Signature") || "", "utf8");
          const hmac = crypto.createHmac("sha1", QTICKETS_WEBHOOK_SIGNATURE_SECRET);
          const digest = Buffer.from(hmac.update(req.rawBody).digest("hex"), "utf8");

          if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
               return res.status(403).json({ error: "invalid signature" });
          }

          next();
     } catch (e) {
          requestServerError(e, res);
     }
};

export default checkSignature;
