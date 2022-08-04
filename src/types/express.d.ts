import { user } from "@prisma/client";
import "express-session";

declare global {
     namespace Express {
          interface User extends user, User {}

          interface Request extends Request {
               rawBody: any;
          }
     }
}

declare module "express-session" {
     interface SessionData {
          unverifyedEmail?: string | null;
          verifyCode?: number | null;
     }
}
