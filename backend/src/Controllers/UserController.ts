import {Request,Response} from 'express';
import db from '../Database/connection';

export default {

    async  index(req:Request, res:Response) 
    {
        const user = await db('tb_user').select('*');
        console.log(user);
        return res.status(200).json(user);
    },
    async Show(request: Request, response:Response){
        const { id } = request.params;

        const user = db('tb_user').select('*').where('id',id)
        
        
        return response.status(200).json(user);
    },
    async create(request: Request, response:Response){
        const { username,user_password,user_email,securitykey,description } = request.body

        await db('tb_user').insert({
            username: username,
            user_password:user_password,
            user_email:user_email,
            securitykey:securitykey,
            description:description
        })

        return response.status(201).send('OK')
    }


}