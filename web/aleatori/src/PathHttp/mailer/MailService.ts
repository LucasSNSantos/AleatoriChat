import * as nodemailer from 'nodemailer'; 
 
    export default class GMailService { 
      
      private _transporter: nodemailer.Transporter; 
      
      constructor() { 
        this._transporter = nodemailer.createTransport( 
           `smtps://<noreply.aleatorichat@gmail.com>:<Ale@torius912Chat>@smtp.gmail.com`
        ); 
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