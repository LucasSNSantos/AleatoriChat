import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'
import connection from '../Database/connection';

export default {
    async createHash(req:Request,res:Response){
        const {username,user_password} = req.body;
          console.log(req.body);
        const results = await connection('tb_user').select('user_id').where('username',username);
     
        const id = results.find(n => n.id)
        const encoded = await jwt.sign({id},'kureijichesu',{expiresIn:'1d'})

        return res.status(201).json({hash:encoded})
    }
}