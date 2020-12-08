import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'
import connection from '../Database/connection';


export default {
    
    async createHash(req:Request,res:Response){
        const {username,user_password} = req.body;
<<<<<<< HEAD
        
        const results = await connection('tb_user').where('username',username).select('*');
=======
        const results = await connection('tb_user').where('username',username).select('*');
        const possibleUser = results[0];
>>>>>>> c79f6e690eb88b073855d7ce28ed82a3912bf35c
        
        if(!results) return res.sendStatus(402)
        const possibleUser = results[0]
       
        if(possibleUser.user_password != user_password) return res.sendStatus(401);

        const id = possibleUser.user_id
        const encoded = await jwt.sign({id},'kureijichesu',{expiresIn:'1d'})
<<<<<<< HEAD

        delete possibleUser.user_password
        const user = possibleUser

        return res.status(200).json({user,hash:encoded})
    }/*
=======
 
        return res.status(202).json({hash:encoded})
    },
>>>>>>> c79f6e690eb88b073855d7ce28ed82a3912bf35c
    async decodeHash(req:Request,res:Response){
        const { token } = req.headers;

        if (!token) return res.sendStatus(401);

        const objID = await jwt.decode(token.toString(),{json:true})
        //const id = objID!.id
        console.log(objID)

        return res.status(200).json(objID)
    }   */
}