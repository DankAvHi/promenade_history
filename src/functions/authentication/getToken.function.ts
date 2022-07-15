import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET, SESSION_EXPIRY } from "../../setup/setupConfig";

export const getToken = (vkid: number) => {
     if (!JWT_SECRET || !SESSION_EXPIRY) {
          throw new Error(`\n⛔[ERROR] JWT_SECRET or SESSION_EXPIRY is not provided in .env file\n`);
     }

     return jsonwebtoken.sign({ vkid: vkid }, JWT_SECRET, {
          expiresIn: eval(SESSION_EXPIRY),
     });
};
