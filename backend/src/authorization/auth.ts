import jwt from 'jsonwebtoken'
import {promisify} from 'util'
import {Request,Response,NextFunction} from 'express'

async function validate(req:Request,res:Response,next:NextFunction){
    const { token } = req.headers;

    if(!token) {
        return res.status(401);
    }

    const [,davi] = token
    
    try{
        //trocar senha pra .Env.auth_pass (mais seguro)
        await promisify(jwt.verify)(davi,'kureijichesu')
    }catch(e){
        return res.sendStatus(401).json({message:'Autenticação do token FAIL'})
    }

    next()
}

export default validate;

