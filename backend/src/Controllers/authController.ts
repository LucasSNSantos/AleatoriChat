import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'
import connection from '../Database/connection';

export default {
    
    async createHash(req:Request,res:Response){
        const {username,user_password} = req.body;
        console.log(username,user_password)
        
        const results = await connection('tb_user').where('username',username).select('*');
        const possibleUser = results[0]
        
        if(possibleUser!.user_password !== user_password) return res.sendStatus(401);

        const id = possibleUser.id
        const encoded = await jwt.sign({id},'kureijichesu',{expiresIn:'1d'})

        return res.status(202).json({hash:encoded})
    },
    async decodeHash(req:Request,res:Response){
        const { token } = req.headers;

        if (!token) return res.sendStatus(401);

        const objID = await jwt.decode(token!.toString(),{json:true})
        //const id = objID!.id

        return res.status(200).json(objID)
    }
}