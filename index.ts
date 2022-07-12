import cookieParser from "cookie-parser";
import cors from "cors";

import express from "express";
import expressSession from "express-session";
import passport from "passport";
import path from "path";
import apiRouter from "./src/api/api";

import VKStrategy from "./src/authentication/strategies/VKStrategy";

import { API_ROUTE } from "./shared/routes/api/api.shared";
import { PORT, SESSION_SECRET, STATIC_PATH } from "./src/setup/setupConfig";

if (!SESSION_SECRET) {
     throw new Error(`\n⛔[ERROR] SESSION_SECRET is not provided in .env file\n`);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(STATIC_PATH)));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({ resave: true, secret: SESSION_SECRET, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
VKStrategy();

app.use(API_ROUTE, apiRouter);

app.get("*", (_, res) => res.sendFile(path.resolve("client", "build", "index.html")));

app.listen(PORT, () => {
     console.log(`\n⚡[INFO] Server launched at http://localhost:${PORT}\n`);
});
