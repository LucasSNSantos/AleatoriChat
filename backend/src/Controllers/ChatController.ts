import {Request,Response} from 'express';
import db from '../Database/connection';

export default {
    async Index(req:Request, res:Response)
    {
        let response;
        try
        {
            response = await db('tb_chat_sala').select('*');
            
        }catch(error)
        {
            return res.sendStatus(400)
        }
        return res.status(200).json(response);
    },
    

    async CreateChat(req:Request, res:Response)
    {
        const data = {
            chat_name: req.body.chat_name,
            description: req.body.description,
            acessibility: req.body.accessbility,
            link: req.body.link,
            member_limit: req.body.member_limit,
            favorite: req.body.favorite
        }

        try
        {
            await db('tb_chat_sala').insert(data);
            return res.status(200).send("Chat criado com sucesso");
        }catch(error)
        {
            return res.sendStatus(400)
        }
    }
};
