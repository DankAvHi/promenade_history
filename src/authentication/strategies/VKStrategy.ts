import passport from "passport";
import { Strategy } from "passport-vkontakte-no-pkginfo";
import { HOME_PAGE_ROUTE, URL, VK_APP_ID, VK_CALLBACK_URL, VK_SECURE_KEY } from "../../setup/setupConfig";

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
               },

               async (accessToken, refreshToken, params, profile, done) => {
                    return done(null, profile);
               }
          )
     );

     passport.serializeUser((user, done) => {
          done(null, user);
     });

     passport.deserializeUser((user: Express.User, done) => {
          done(null, user);
     });
};

export default VKStrategy;
