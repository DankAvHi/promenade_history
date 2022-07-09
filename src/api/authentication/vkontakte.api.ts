import { Router } from "express";
import passport from "passport";

const vkontakteRouter = Router();

vkontakteRouter.get("/", passport.authenticate("vkontakte"), function (req, res) {});

vkontakteRouter.get(
     "/callback",
     passport.authenticate("vkontakte", {
          failureRedirect: "/login",
          session: false,
     }),
     function (req, res) {
          res.send(req.user);
     }
);

export default vkontakteRouter;
