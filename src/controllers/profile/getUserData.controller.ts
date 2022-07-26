import { RequestHandler } from "express";
import { UserResponse } from "../../../shared/interfaces/api/userData.shared.d";
import requestServerError from "../../errors/requestServerError/requestServerError.error";
import prisma from "../../setup/setupPrismaConnection";

const getUserDataController: RequestHandler = async (req, res, next) => {
     try {
          if (!req.user) {
               return res.status(403).json({ error: "Unauth" });
          }

          const user = await prisma.user.findUnique({
               where: {
                    vkid: req.user.iduser,
               },
          });
          if (!user) {
               return res.status(403).json({ error: "user doesnt existed" });
          }

          const response: UserResponse = {
               succes: true,
               user: { name: user.name, image: user.image },
          };
          res.json(response);
     } catch (e) {
          requestServerError(e, res);
     }
};

export default getUserDataController;
