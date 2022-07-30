import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const {
     PORT,
     NODE_ENV = "production",
     CLIENT_URL,
     URL,
     SESSION_SECRET,
     VK_APP_ID,
     VK_SECURE_KEY,
     VK_CALLBACK_URL,
     REFRESH_TOKEN_EXPIRY,
     JWT_SECRET,
     SESSION_EXPIRY,
     REFRESH_TOKEN_SECRET,
     QTICKETS_API_TOKEN,
} = process.env;

const requeiredValues: { [key: string]: any } = {
     PORT,
     CLIENT_URL,
     URL,
     REFRESH_TOKEN_EXPIRY,
     SESSION_SECRET,
     VK_APP_ID,
     VK_SECURE_KEY,
     VK_CALLBACK_URL,
     JWT_SECRET,
     SESSION_EXPIRY,
     REFRESH_TOKEN_SECRET,
     QTICKETS_API_TOKEN,
};

for (let i = 0; i < Object.keys(requeiredValues).length; i++) {
     const keys = Object.keys(requeiredValues);

     if (!requeiredValues[keys[i]]) {
          throw new Error(`❌ [server] ${keys[i]} not provided in .env file`);
     }
}

export const STATIC_PATH =
     NODE_ENV == "development" || process.argv[2] === "development"
          ? path.resolve("client", "build")
          : path.resolve("public");

export const HOME_PAGE_ROUTE = NODE_ENV == "development" || process.argv[2] === "development" ? CLIENT_URL : URL;

export const COOKIE_OPTIONS = {
     // httpOnly: true,
     // secure: true,
     signed: true,
     //@ts-ignore
     maxAge: eval(REFRESH_TOKEN_EXPIRY),
     // sameSite: "none",
};

export const NOT_EXPIRED_COOKIE_OPTIONS = {
     // httpOnly: true,
     // secure: true,
     signed: true,
     // sameSite: "none",
};
