import { Response } from "express";

export type ErrorType = (e: unknown, res: Response) => Promise<void>;
