"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("./config"));
class Mail {
    constructor(to, //esta enviando para quem
    assunto, //assunto  do Email
    message //conteudo do email
    ) {
        this.to = to;
        this.assunto = assunto;
        this.message = message;
    }
    sendEmail() {
        let mailOptions = {
            from: "example@gmail.com",
            to: this.to,
            port: config_1.default.port,
            assunto: this.assunto,
            html: this.message
        };
        const transporter = nodemailer_1.default.createTransport({
            host: config_1.default.host,
            port: config_1.default.port,
            secure: false,
            auth: {
                user: config_1.default.user,
                pass: config_1.default.password
            },
            tls: { rejectUnauthorized: false }
        });
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            }
            else {
                return "Email enviado com sucesso";
            }
        });
    }
}
exports.default = new Mail;
