import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import randomIdGenerator from "../../functions/authentication/userIdGenerator.function";
import { JWT_SECRET } from "../../setup/setupConfig";
import prisma from "../../setup/setupPrismaConnection";

const vkontakteController: RequestHandler = async (req, res, next) => {
     try {
          if (!JWT_SECRET) {
               throw new Error(`\n⛔[ERROR] JWT_SECRT doesn't provided in .env file\n`);
          }
          if (!req.user) {
               throw new Error(`\n⛔[ERROR] request doesnt return user or user havent email\n`);
          }

          const reqUser = req.user;

          const isUserExisted = !!(await prisma.user.findUnique({ where: { vkid: reqUser.id } }));
          if (isUserExisted) {
               return res.redirect("/");
          }

          const iduser: number = await randomIdGenerator();
          await prisma.user.create({
               data: {
                    iduser: iduser,
                    vkid: reqUser.id,
                    name: reqUser.displayName,
               },
          });
          res.redirect("/");
     } catch (e) {
          requestServerError(e, res);
     }
};

export default vkontakteController;
