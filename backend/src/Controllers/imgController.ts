import {Request,Response} from 'express';
import db from '../Database/connection';

export default {

    async uploadImgUser(request:Request, res:Response) 
    {   
        const {img_src,username} = request.body

        var img = "";
        if(!img_src){
            const requestImages = request.file as Express.Multer.File;
            const image = "http://localhost:4444/uploads/"+requestImages.filename;
            img = image;
        }else{
            img = img_src;
        }
        if(!img || img == "") return res.status(404).json("Não existe arquivo!");

        await db('tb_user').update({img_src: img}).where('username',username);
        return res.status(200).json(img);
    }
};
