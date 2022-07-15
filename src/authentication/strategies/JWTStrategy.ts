import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import prisma from "../../setup/setupPrismaConnection";

const JWTStrategy = () => {
     passport.use(
          new Strategy(
               { secretOrKey: process.env.JWT_SECRET, jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() },
               async (jwt_payload, done) => {
                    try {
                         const user = await prisma.user.findFirst({
                              where: {
                                   vkid: jwt_payload.vkid,
                              },
                         });

                         if (user) {
                              return done(null, user);
                         }
                         return done(null, false);
                    } catch (e) {
                         console.log(`❌ [server] ${e}`);
                         return done(e, false);
                    }
               }
          )
     );
};

export default JWTStrategy;
