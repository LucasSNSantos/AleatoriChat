import {request, Request,Response} from 'express';
import db from '../Database/connection';


class FeedController
{

    async UserFeed(req:Request, res:Response)
    {
        try
        {
            //feed do app
            const feed = db('tb_chat_user').select('*');

            return res.status(200).json(feed);
        }catch(error)
        {
            console.log(error);
        }


    }


    async CreatePost(req:Request, res:Response)
    {
        const postagem = {
            Donwload_link:req.body.Donwload_link,
            Spoiler: Boolean(req.body.Spoiler),
            Censorship: Boolean(req.body.Censorship),
            fk_Chat_sala:req.body.chat_sala_id    
        }
        db('tb_posts').insert(postagem);
        db('tb_posts').select('id').where('Download_link', req.body.Download_link);
        const data = { 
            fk_User_User_id: req.body.user_id,
            fk_Chat_sala:req.body.chat_sala_id,
            //conexao com o chat
        }

        //criar Chat();



    }




}



export default new FeedController();


