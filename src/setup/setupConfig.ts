import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const {
     PORT = 8000,
     NODE_ENV = "production",
     CLIENT_URL = "http://localhost:3000",
     URL = "http://localhost:8000",
     SESSION_SECRET,
     VK_APP_ID,
     VK_SECURE_KEY,
     VK_CALLBACK_URL,
} = process.env;

export const STATIC_PATH =
     NODE_ENV == "development" || process.argv[2] === "development"
          ? path.resolve("client", "build")
          : path.resolve("public");

export const HOME_PAGE_ROUTE = NODE_ENV == "development" || process.argv[2] === "development" ? CLIENT_URL : URL;
