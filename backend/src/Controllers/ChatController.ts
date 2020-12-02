import {Request,Response} from 'express';
import db from '../Database/connection';


export default {
    async Index(req:Request, res:Response)
    {
        try
        {
            const response = await db('tb_chat_sala').select('*');
            return res.status(200).json(response);
        }catch(error)
        {
            console.log(error);
        }

    }




}










