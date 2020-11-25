import {Request,Response} from 'express';
import db from '../Database/connection';



export default {

    async CreatePost(req:Request, res:Response) {
        const data = {
            censorship:req.body.censorship, //censura do chat
            spoiler:req.body.spoiler, //spoiler sim ou nao
            fk_chat_user:req.body.fk_chat_user //FK do usuario com o chat
        }

        try 
        {
            await db('tb_')
        }
        
    }




}