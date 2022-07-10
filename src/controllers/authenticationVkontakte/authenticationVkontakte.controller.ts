import { RequestHandler } from "express";
import jsonWebToken from "jsonwebtoken";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const authenticationVkontakteController: RequestHandler = async (req, res, next) => {
     try {
          if (!process.env.JWT_SECRET || !req.user) {
               throw new Error(`\n⛔[ERROR] JWT_SECRT doesn't provided in .env file\n`);
          }
          const token = jsonWebToken.sign(req.user, process.env.JWT_SECRET);

          // @ts-ignore
          const user = await prisma.user.findUnique({ where: { vkid: req.user.id } });

          if (user) {
               const iduser = user.vkid;
               res.cookie("token", token);
               res.cookie("iduser", iduser);
               return res.redirect("/");
          }

          const newUser = await prisma.user.create({
               data: {
                    // @ts-ignore
                    first_name: req.user.name.givenName, // @ts-ignore
                    last_name: req.user.name.familyName, // @ts-ignore
                    email: req.user.emails[0].value, // @ts-ignore
                    vkid: req.user.id,
               },
          });
          const iduser = newUser.vkid;
          res.cookie("token", token);
          res.cookie("iduser", iduser);
          return res.redirect("/");
     } catch (e) {
          requestServerError(e, res);
     }
};

export default authenticationVkontakteController;
