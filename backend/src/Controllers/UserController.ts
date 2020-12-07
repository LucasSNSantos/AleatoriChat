import {Request,Response} from 'express';
import db from '../Database/connection';
import nodemailer from "nodemailer";

class UserController
{
    
    async Show(req:Request, res:Response) 
    {
        const user = await db('tb_user').select('*');
        return res.status(200).json(user);
    }

    async Update_password(req: Request, res:Response)
    {
        const {id, new_pass} = req.body;
        try{
            console.log(`${id} ${new_pass}`)

            await db('tb_user').update('user_password',new_pass).where('user_id',id);
            return res.status(200).json({id, new_pass});
        }catch(error)
        {
            console.log(error)
            return res.status(400).json({id, new_pass});
        }
    }

    async index(req: Request, res:Response){
            const { id } = req.params;

            const user = await db('tb_user').select('*').where('user_id',id).catch(e => {
                return res.sendStatus(500)
            }); 

            if(!user) return res.sendStatus(404);

            return res.status(200).json(user);
    }

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
        try{      
            await db('tb_user').insert(data);
            //trigger de cadastro
            if(await db('tb_user').select('username').where('username',data.username)){
                
                //Defining mailer
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: "noreply.aleatorichat@gmail.com", // Sender Email address
                      pass: "Ale@torius912Chat", // Sender Email password
                    },
                    tls: {
                        // Fix for rejection because of localhost
                        rejectUnauthorized: false
                      }
                    
                  });
                  // Send mail (provavelmente rolava fzr uma classe pra deixar bonito but it's life)
                  var info = await transporter.sendMail({
                    from: `"AleatoriChat" <noreply.aleatorichat@gmail.com>`, // Render address
                    to: `${data.user_email}`, // Receivers
                    subject: "Hello new AleatoriUser! ✔", // Title
                    text: "Hello world?", // Plaint text email
                    html: "<b>Hello world?</b>", // html for styling the email
                  });
                  console.log(`${info}\n PASSOU`);

                return response.status(201).send('Você foi cadastrado com sucesso. Bem vindo ao AleatoriChat!.');            
            }
        }catch(error){
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
        
    }

    //Mostra *TODAS* as permissoes do usuario
    async UserPermissions(req:Request, res: Response)
    {
        const {user_id} = req.params;
        console.log(req.params);
        try
        {
            const perm = await db('tb_user as u').select("user_id","username","p.description").from('tb_user as u')
            .rightJoin('tb_permission_user as pu', 'pu.fk_user_id', 'u.user_id')
            .rightJoin('tb_permissions as p', 'p.id_permission', 'pu.fk_permission_id').where('user_id', user_id);
            
            return res.status(200).json(perm);
        }catch(error)
        {
            console.log(error);
        }

    }

    //Cria uma nova Permissao
    async CreatePermissions(req:Request, res:Response)
    {
        const data = {
            description: req.body.description
        }
        try
        {
            await db('tb_permissions').insert(data);

            return res.send("Deu certo a criacao da permissao");
        }catch(error)
        {
            return res.send("Erro ao criar a permissao");
        }
    }
    //Associa uma permissao a um usuario
    async AddPermission(req:Request, res:Response)
    {
        const data = {
            fk_user_id: req.body.user_id,
            fk_permission_id: req.body.permission_id
        }

        try
        {
            console.log(data);
            await db('tb_permission_user').insert(data);
            return res.send("Criado com sucesso");

        }catch(error)
        {
            return res.send("Erro");
        }
    }

    async IndexPermissions(req:Request, res:Response)
    {
        try
        {
            const result = await db('tb_permissions').select("*");
            console.log(result);
            return res.status(200).json(result);
        }catch(error)
        {
            return res.send("Erro");
        }
    }
}



export default new UserController();