import jsonwebtoken from "jsonwebtoken";
import { REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../../setup/setupConfig";

export const getRefreshToken = (vkid: number) => {
     if (!REFRESH_TOKEN_EXPIRY || !REFRESH_TOKEN_SECRET) {
          throw new Error(`\n⛔[ERROR] REFRESH_TOKEN_EXPIRY or REFRESH_TOKEN_SECRET is not provided in .env file\n`);
     }
     const refreshToken = jsonwebtoken.sign({ vkid: vkid }, REFRESH_TOKEN_SECRET, {
          expiresIn: eval(REFRESH_TOKEN_EXPIRY),
     });
     return refreshToken;
};
