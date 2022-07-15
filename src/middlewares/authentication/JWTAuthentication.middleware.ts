import passport from "passport";

export const JWTAuthenticate = passport.authenticate("jwt", { session: false });
