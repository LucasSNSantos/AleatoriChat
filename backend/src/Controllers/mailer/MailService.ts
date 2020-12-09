import * as nodemailer from 'nodemailer'; 
 
    export default class GMailService { 
      
      private _transporter: nodemailer.Transporter; 
      
      constructor() { 
        this._transporter = nodemailer.createTransport({
          
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "noreply.aleatorichat@gmail.com", // generated ethereal user
            pass: "Ale@torius912Chat", // generated ethereal password
          },
        });
      } 
      sendMail(to: string, subject: string, content: string) { 
        let options = { 
          from: 'noreply.aleatorichat@gmail.com', 
          to: to, 
          subject: subject, 
          text: content 
        } 
 
        this._transporter.sendMail(  
          options, (error, info) => { 
            if (error) { 
              return console.log(`error: ${error}`); 
            } 
            console.log(`Message Sent ${info.response}`); 
          }); 
      } 
    } 