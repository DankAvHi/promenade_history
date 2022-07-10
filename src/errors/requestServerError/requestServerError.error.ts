import { ErrorType } from "../IError";

const requestServerError: ErrorType = async (e, res) => {
     res.statusMessage = "Server Error";
     res.status(500).json({ error: "Server Error" });
     console.log(`❌ [server] ${e}`);
};

export default requestServerError;
