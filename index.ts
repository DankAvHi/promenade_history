import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import path from "path";
import apiRouter from "./src/api/api";
import VKStrategy from "./src/authentication/strategies/VKStrategy";

dotenv.config();
const { PORT = 8000, NODE_ENV = "production" } = process.env;
const STATIC_PATH =
     NODE_ENV == "development" || process.argv[2] === "development"
          ? path.resolve(__dirname, "client", "build")
          : path.resolve(__dirname, "public");
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
     throw new Error(`\n⛔[ERROR] SESSION_SECRET is not provided in .env file\n`);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(STATIC_PATH)));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({ resave: true, secret: SESSION_SECRET, saveUninitialized: true }));
app.use(passport.session());

VKStrategy();

app.use("/api", apiRouter);

app.listen(PORT, () => {
     console.log(`\n⚡[INFO] Server launched at http://localhost:${PORT}\n`);
});
