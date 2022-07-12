import passport from "passport";
// @ts-ignore
import { Strategy } from "passport-vkontakte-no-pkginfo";
import { HOME_PAGE_ROUTE, URL, VK_APP_ID, VK_CALLBACK_URL, VK_SECURE_KEY } from "../../setup/setupConfig";
import prisma from "../../setup/setupPrismaConnection";

const VKStrategy = () => {
     if (!VK_APP_ID || !VK_SECURE_KEY || !VK_CALLBACK_URL || !URL) {
          throw new Error(`\n⛔[ERROR] VK Api keys doesn't provided in .env file\n`);
     }

     passport.use(
          new Strategy(
               {
                    ...{
                         clientID: VK_APP_ID,
                         clientSecret: VK_SECURE_KEY,
                         callbackURL: HOME_PAGE_ROUTE + VK_CALLBACK_URL,
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
