import {Request,Response} from 'express';
//import * as yup from 'yup'
import db from '../Database/connection';

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
        const { username,user_password,user_email,description} = request.body;
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
                return response.status(201).send('OK, cadastrado.');            
            }
        }catch(error){
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
        
    }


}