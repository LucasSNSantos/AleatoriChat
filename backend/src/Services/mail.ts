import mail from 'nodemailer';
import configs from './config';


class Mail
{
    constructor(
        public to?: string, //esta enviando para quem
        public assunto?: string, //assunto  do Email
        public message?:string //conteudo do email
    ){}

    sendEmail()
    {
        let mailOptions = {
            from: "example@gmail.com",
            to: this.to,
            port: configs.port,
            assunto: this.assunto,
            html: this.message
        }

        const transporter = mail.createTransport({
            host:configs.host,
            port:configs.port,
            secure:false,
            auth: {
                user:configs.user,
                pass:configs.password
            },
            tls:{rejectUnauthorized:false}
        })    

        console.log(mailOptions);

        transporter.sendMail(mailOptions, function(error, info){
            if(error)
            {
                return error;
            }else
            {
                return "Email enviado com sucesso"
            }
        } )



    }



}
export default new Mail;