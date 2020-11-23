import {Request,Response} from 'express';
import db from '../Database/connection';


export default {

    async Show(req:Request, res:Response) 
    {

        try
        {
            const tags = await db('tb_tags').select('*');
            return res.status(200).json(tags);
        }catch(error)
        {
            console.log("Deu erro");
        }
    },

    async CreateTags(req:Request, res:Response)
    {

        const data = {
            tag_name: req.body.tag_name,
        }
        try
        {
            await db('tb_tags').insert(data);
            return res.status(200).send("Tag " + data.tag_name + " inserida com sucesso");
        }catch(error)
        {
            console.log("Error");
        }
    }

}