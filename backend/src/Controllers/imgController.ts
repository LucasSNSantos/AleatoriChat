import {Request,Response} from 'express';
import db from '../Database/connection';

export default {

    async uploadImgUser(request:Request, res:Response) 
    {   
        const {img_src,username} = request.body
        console.log(img_src+"\n"+username+"\n"+request.file);
        var img = "";
        if(!img_src){
            const requestImages = request.file as Express.Multer.File;
            const image = requestImages.path;
            img = image;
        }else{
            img = img_src;
        }
        if(!img || img == "") return res.status(404).json("Não existe arquivo!");

        await db('tb_user').update({img_src: img}).where('username',username);
        return res.status(200).json(img);
    }
};
