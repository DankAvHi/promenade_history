import passport from "passport";
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

                    lang: "ru",
                    scope: ["email"],
               },

               async (accessToken, refreshToken, params, profile, done) => {
                    if (!profile) {
                         return done(null, false);
                    }

                    const existedUser = await prisma.user.findUnique({ where: { vkid: profile.id } });

                    const isEmailExisted = profile.emails
                         ? !!(await prisma.user.findFirst({ where: { email: profile.emails[0].value } }))
                         : false;

                    if (existedUser) {
                         const user = await prisma.user.update({
                              where: {
                                   vkid: profile.id,
                              },
                              data: {
                                   name: profile.displayName,
                                   image: profile.photos ? profile.photos[0].value : null,
                              },
                         });

                         return done(null, user);
                    } else {
                         const user = await prisma.user.create({
                              data: {
                                   iduser: profile.id,
                                   vkid: profile.id,
                                   name: profile.displayName,
                                   image: profile.photos ? profile.photos[0].value : null,
                                   email: profile.emails && !isEmailExisted ? profile.emails[0].value : null,
                              },
                         });
                         return done(null, user);
                    }
               }
          )
     );

     passport.serializeUser((user, done) => {
          done(null, user.iduser);
     });

     passport.deserializeUser((iduser: Express.User["iduser"], done) => {
          prisma.user.findUnique({ where: { iduser: iduser } }).then((user) => {
               done(null, user);
          });
     });
};

export default VKStrategy;
