import {Request,Response} from 'express';
import db from '../Database/connection';
import nodemailer from "nodemailer";

export default {

    async Show(req:Request, res:Response) 
    {   
        const users = await db('tb_user').select('*');
        
        if(!users) return res.sendStatus(404)

        return res.status(200).json(users);
    },

    async Update_password(req: Request, res:Response)
    {
        const {id, new_pass} = req.body;
        try{
            console.log(`${id} ${new_pass}`)

            await db('tb_user').update('user_password',new_pass).where('user_id',id);
            return res.status(200).json({id, new_pass});
        }catch(error)
        {
            return res.status(400).json({id, new_pass});
        }
    },

    async index(req: Request, res:Response){
            const { id } = req.params;

            const user = await db('tb_user').select('*').where('user_id',id).catch(e => {
                return res.sendStatus(500)
            }); 

            if(!user) return res.sendStatus(404);

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
            description:description,
            img_src:"https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg"
        }
        try{      
            await db('tb_user').insert(data);
            //trigger de cadastro
            if(await db('tb_user').select('username').where('username',data.username)){
                return response.status(201).send('Você foi cadastrado com sucesso. Bem vindo ao AleatoriChat!.');            
            }
        }catch(error){
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
        
    }


}