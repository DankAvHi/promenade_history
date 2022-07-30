import ConnectSQLite3 from "connect-sqlite3";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import path from "path";

import apiRouter from "./src/api/api";
import VKStrategy from "./src/authentication/strategies/VKStrategy";

import { API_ROUTE } from "./shared/routes/api/api.shared";
import JWTStrategy from "./src/authentication/strategies/JWTStrategy";
import { COOKIE_OPTIONS, PORT, SESSION_SECRET, STATIC_PATH } from "./src/setup/setupConfig";
import { initializePrisma } from "./src/setup/setupPrismaConnection";

if (!SESSION_SECRET) {
     throw new Error(`\n⛔[ERROR] SESSION_SECRET is not provided in .env file\n`);
}

const app = express();
initializePrisma();
const SQLiteStore = ConnectSQLite3(expressSession);
const store = new SQLiteStore({ table: "sessions", db: "sessions.db" });

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
     expressSession({
          resave: true,
          secret: SESSION_SECRET,
          rolling: true,
          saveUninitialized: false,
          cookie: COOKIE_OPTIONS,
          //@ts-ignore
          store: store,
     })
);
app.use(express.static(path.resolve(STATIC_PATH)));
app.use(passport.initialize());
app.use(passport.session());

VKStrategy();
JWTStrategy();

app.use(API_ROUTE, apiRouter);

app.get("*", (_, res) => res.sendFile(path.resolve("client", "build", "index.html")));

app.listen(PORT, () => {
     console.log(`\n⚡[INFO] Server launched at http://localhost:${PORT}\n`);
});
