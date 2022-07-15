// Type definitions for passport-vkontakte-no-pkginfo 1.3
// Project: https://github.com/stevebest/passport-vkontakte#readme
// Definitions by: Anton Lobashev <https://github.com/soulthreads>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "passport-vkontakte-no-pkginfo" {
     import * as express from "express";
     import * as passport from "passport";

     export interface Profile extends passport.Profile {
          id: number;
          gender?: string | undefined;
          profileUrl?: string | undefined;

          _raw: string;
          _json: any;
     }

     export interface StrategyOptions {
          clientID: string;
          clientSecret: string;
          callbackURL: string;

          scope?: string[] | undefined;
          profileFields?: string[] | undefined;
          apiVersion?: string | undefined;

          lang?: string | undefined;
     }

     export type VerifyCallback = (error: any, user?: any, info?: any) => void;

     export interface Params {
          accessToken: string;
          email?: string | undefined;
          expires_in: number;
          user_id: number;
     }

     export type VerifyFunctionWithParams = (
          accessToken: string,
          refreshToken: string,
          params: Params,
          profile: Profile,
          done: VerifyCallback
     ) => void;

     export type VerifyFunction = (
          accessToken: string,
          refreshToken: string,
          profile: Profile,
          done: VerifyCallback
     ) => void;

     export class Strategy implements passport.Strategy {
          constructor(options: StrategyOptions, verify: VerifyFunctionWithParams | VerifyFunction);

          name: string;
          authenticate: (req: express.Request, options?: object) => void;
     }
}
