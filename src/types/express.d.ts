import { Profile } from "passport-vkontakte-no-pkginfo";

declare global {
     namespace Express {
          interface User extends Profile, User {}
     }
}
