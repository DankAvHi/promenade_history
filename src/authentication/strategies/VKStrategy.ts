import passport from "passport";
// @ts-ignore
import { Strategy } from "passport-vkontakte-no-pkginfo";
import prisma from "../../setup/setupPrismaConnection";

const VKStrategy = () => {
     if (!process.env.VK_APP_ID || !process.env.VK_SECURE_KEY || !process.env.VK_CALLBACK_URL || !process.env.URL) {
          throw new Error(`\n⛔[ERROR] VK Api keys doesn't provided in .env file\n`);
     }

     passport.use(
          new Strategy(
               {
                    ...{
                         clientID: process.env.VK_APP_ID,
                         clientSecret: process.env.VK_SECURE_KEY,
                         callbackURL: process.env.URL + process.env.VK_CALLBACK_URL,
                    },
                    scope: ["email"],
                    profileFields: ["email"],
                    lang: "ru",
               },
               // @ts-ignore
               async (accessToken, refreshToken, params, profile, done) => {
                    if (!profile.emails) {
                         return done(null, false, 400);
                    }
                    return done(null, profile);
               }
          )
     );

     passport.serializeUser(function (user, done) {
          // @ts-ignore
          done(null, user.id);
     });

     passport.deserializeUser(function (id: number, done) {
          prisma.user
               .findUnique({ where: { iduser: id } })
               .then((user) => {
                    done(null, user);
               })
               .catch(done);
     });
};

export default VKStrategy;
