import nodemailer from "nodemailer";
import { EMAIL_ADDRES, EMAIL_PASSWORD } from "./setupConfig";

export const transporter = nodemailer.createTransport({
     service: "gmail",
     host: "smtp.gmail.com",
     secure: true, // true for 465, false for other ports
     auth: {
          user: EMAIL_ADDRES, // generated ethereal user
          pass: EMAIL_PASSWORD, // generated ethereal password
     },
});
