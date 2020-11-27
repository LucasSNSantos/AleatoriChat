import {Request,Response} from 'express';
//import * as yup from 'yup'
import db from '../Database/connection';
const nodemailer = require("nodemailer");

export default {

    async Show(req:Request, res:Response) 
    {
        const user = await db('tb_user').select('*');
        //console.log(user);
        return res.status(200).json(user);
    },

    async index(req: Request, res:Response){
            const { id } = req.params;

            const user = await db('tb_user').select('*').where('id',id); 
            return res.status(200).json(user);
    },

    async create(request: Request, response:Response){
        const { username,user_password,user_email,description} = request.body
        console.log(request.body)

        const data = {
            username: username,
            user_password:user_password,
            user_email:user_email,
            securitykey:"0000",
            description:description
        }
        // const schema = yup.object().shape({
        //     username: yup.string().required(),
        //     user_password: yup.string().required(),
        //     user_email:yup.string().required(),
        //     securitykey:yup.string().required().min(4),
        //     description:yup.string().required(),
        // })

        // await schema.validate(data,{
        //     abortEarly:false
        // })
        
        try{      
            await db('tb_user').insert(data);
            //trigger de cadastro
        
            if(await db('tb_user').select('username').where('username',data.username)){
                
                //Defining mailer
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: "a", // Sender Email address
                      pass: "b", // Sender Email password
                    },
                    tls: {
                        // Fix for rejection because of localhost
                        rejectUnauthorized: false
                      }
                    
                  });
                
                  // Send mail (provavelmente rolava fzr uma classe pra deixar bonito but it's life)
                  let info = await transporter.sendMail({
                    from: `"AleatoriChat " <COLOCAR EMAIL DO ALEATORI AQUI>`, // Render address
                    to: `${data.user_email}`, // Receivers
                    subject: "Hello ✔", // Title
                    text: "Hello world?", // Plaint text email
                    html: "<b>Hello world?</b>", // html for styling the email
                  });

                return response.status(201).send('Você foi cadastrado com sucesso. Bem vindo ao AleatoriChat!.');            
            }
        }catch(error){
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
        
    }


}