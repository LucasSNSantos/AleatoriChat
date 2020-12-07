import {request, Request,Response} from 'express';
import db from '../Database/connection';


/*
            const perm = await db('tb_user as u').select("user_id","username","p.description").from('tb_user as u')
            .rightJoin('tb_permission_user as pu', 'pu.fk_user_id', 'u.user_id')
            .rightJoin('tb_permissions as p', 'p.id_permission', 'pu.fk_permission_id').where('user_id', user_id); 
*/

class FeedController
{

    async UserFeed(req:Request, res:Response)
    {
        try
        {
            const tag_id = req.body.tag_id;
            const feed = await db('tb_chat_user as cu').select('cs.name, cs.member_limit, t.name')
            .from('tb_chat_user as cu')
            .rightJoin('tb_chat_sala as cs', 'cu.fk_chat_sala_chat_sala_id', 'cs.chat_sala_id')
            .rightJoin('tb_chat_tags as ct', 'cs.fk_tags_tag_id', 'ct.id_chat_tag')
            .rightJoin('tb_tags as t', 'ct.fk_tags_tag_id', 't.tag_id');

            return res.status(200).json(feed);
        }catch(error)
        {
            console.log(error);
        }


    }
    


    async CreateP0ost(req:Request, res:Response)
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


