import dotenv from "dotenv";
import { CookieOptions } from "express-session";
import path from "path";
dotenv.config({
     path:
          process.env.NODE_ENV === "development" || process.argv[2] === "development"
               ? path.resolve(process.cwd(), "develop.env")
               : path.resolve(process.cwd(), "production.env"),
});

export const {
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
     QTICKETS_WEBHOOK_SIGNATURE_SECRET,
     SECURE = "false",
     EMAIL_ADDRES,
     EMAIL_PASSWORD,
     SECURE_CERT_PATH,
     SECURE_KEY_PATH,
} = process.env;

export const isDevelopment = NODE_ENV == "development" || process.argv[2] === "development";

const requeiredValues: { [key: string]: any } = {
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
     QTICKETS_WEBHOOK_SIGNATURE_SECRET,
     EMAIL_ADDRES,
     EMAIL_PASSWORD,
};

for (let i = 0; i < Object.keys(requeiredValues).length; i++) {
     const keys = Object.keys(requeiredValues);

     if (!requeiredValues[keys[i]]) {
          throw new Error(`❌ [server] ${keys[i]} not provided in .env file`);
     }
}

if (SECURE === "true") {
     if (!SECURE_CERT_PATH || !SECURE_KEY_PATH) {
          throw new Error(`❌ [server] SSL files paths not provided in .env file`);
     }
}
export const HTTP_PORT = isDevelopment ? process.env.DEV_HTTP_PORT : process.env.HTTP_PORT;
export const HTTPS_PORT = isDevelopment ? process.env.DEV_HTTPS_PORT : process.env.HTTPS_PORT;

if (!HTTP_PORT || (SECURE && !HTTPS_PORT)) {
     throw new Error(`❌ [server] PORTS not provided in .env file`);
}

export const STATIC_PATH = isDevelopment ? path.resolve("client", "build") : path.resolve("public");

export const HOME_PAGE_ROUTE = isDevelopment ? CLIENT_URL : URL;

if (!REFRESH_TOKEN_EXPIRY) {
     throw new Error(`❌ [server] REFRESH_TOKEN_EXPIRY not provided in .env file`);
}

export const COOKIE_OPTIONS: CookieOptions = {
     httpOnly: SECURE === "true",
     secure: SECURE === "true",
     signed: true,
     maxAge: eval(REFRESH_TOKEN_EXPIRY),
     sameSite: false,
};

export const NOT_EXPIRED_COOKIE_OPTIONS: CookieOptions = {
     httpOnly: SECURE === "true",
     secure: SECURE === "true",
     signed: true,
     sameSite: false,
};
