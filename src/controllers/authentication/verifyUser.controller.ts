import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const verifyUserController: RequestHandler = async (req, res, next) => {
     try {
          const cookies = req.cookies;
          if (!cookies.token || !cookies.iduser) {
               return res.status(403).json({ error: "unregistered" });
          }

          const user = await prisma.user.findUnique({
               where: { vkid: Number(cookies.iduser) },
          });

          // @ts-ignore
          res.json({ succes: true, iduser: user.vkid });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default verifyUserController;
