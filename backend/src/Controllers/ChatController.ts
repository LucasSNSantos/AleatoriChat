import {Request,Response} from 'express';
import db from '../Database/connection';


export default {
    async Index(req:Request, res:Response)
    {
        try
        {
           // const response = await db('tb_chat_sala').select('*');
        
            return res.status(200).json({Message:"Oi eu sou o Puck"});
        }catch(error)
        {
            console.log(error);
        }

    }




}










