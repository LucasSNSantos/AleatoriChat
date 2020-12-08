import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'
import connection from '../Database/connection';

export default {
    
    async createHash(req:Request,res:Response){
        const {username,user_password} = req.body;
        
        const results = await connection('tb_user').where('username',username).select('*');
        
        if(!results) return res.sendStatus(402)
        const possibleUser = results[0]
       
        if(possibleUser.user_password != user_password) return res.sendStatus(401);

        const id = possibleUser.user_id
        const encoded = await jwt.sign({id},'kureijichesu',{expiresIn:'1d'})

        delete possibleUser.user_password
        const user = possibleUser

        return res.status(200).json({user,hash:encoded})
    }/*
    async decodeHash(req:Request,res:Response){
        const { token } = req.headers;

        if (!token) return res.sendStatus(401);

        const objID = await jwt.decode(token.toString(),{json:true})
        //const id = objID!.id
        console.log(objID)

        return res.status(200).json(objID)
    }   */
}