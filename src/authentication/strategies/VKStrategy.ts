import passport from "passport";

// @ts-ignore
import { Strategy } from "passport-vkontakte-no-pkginfo";

const VKStrategy = () => {
     if (!process.env.VK_APP_ID || !process.env.VK_SECURE_KEY) {
          throw new Error(`\n⛔[ERROR] VK Api keys doesn't provided in .env file\n`);
     }

     passport.use(
          new Strategy(
               {
                    clientID: process.env.VK_APP_ID,
                    clientSecret: process.env.VK_SECURE_KEY,
                    callbackURL: "https://aac6-188-170-195-193.eu.ngrok.io/api/authentication/vkontakte/callback",
               },
               // @ts-ignore
               async (accessToken, refreshToken, params, profile, done) => {
                    console.log(profile);
               }
          )
     );

     passport.serializeUser(function (user, done) {
          // @ts-ignore
          done(null, user.id);
     });
};

export default VKStrategy;
