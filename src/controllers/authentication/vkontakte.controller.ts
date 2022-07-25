import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import { JWT_SECRET } from "../../setup/setupConfig";
import prisma from "../../setup/setupPrismaConnection";

const vkontakteController: RequestHandler = async (req, res, next) => {
     try {
          if (!JWT_SECRET) {
               throw new Error(`\n⛔[ERROR] JWT_SECRT doesn't provided in .env file\n`);
          }
          if (!req.user) {
               throw new Error(`\n⛔[ERROR] request doesnt return user\n`);
          }

          const reqUser = req.user;

          const isUserExisted = !!(await prisma.user.findUnique({ where: { vkid: reqUser.id } }));
          if (isUserExisted) {
               await prisma.user.update({
                    where: {
                         vkid: reqUser.id,
                    },
                    data: {
                         name: reqUser.displayName,
                         image: reqUser.photos ? reqUser.photos[0].value : null,
                    },
               });
               return res.redirect("/");
          }

          await prisma.user.create({
               data: {
                    iduser: reqUser.id,
                    vkid: reqUser.id,
                    name: reqUser.displayName,
                    image: reqUser.photos ? reqUser.photos[0].value : null,
               },
          });
          res.redirect("/");
     } catch (e) {
          requestServerError(e, res);
     }
};

export default vkontakteController;
