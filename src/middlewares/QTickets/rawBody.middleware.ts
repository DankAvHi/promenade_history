import bodyParser from "body-parser";

const rawBody = bodyParser.json({
     verify: (req, res, buf, encoding: BufferEncoding) => {
          if (buf && buf.length) {
               req.rawBody = buf.toString(encoding || "utf8");
          }
     },
});

export default rawBody;
