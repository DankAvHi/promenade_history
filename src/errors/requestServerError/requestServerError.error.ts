import { Response } from "express";
import { AddArgument } from "../../types/function";
import { Error } from "../Error";
import serverError from "../serverError/ServerError.error";

type RequestServerError = AddArgument<Error, Response>;

const requestServerError: RequestServerError = async (error, res) => {
     res.statusMessage = "Server Error";
     res.status(500).json({ error: "Server Error" });
     serverError(error);
};

export default requestServerError;
