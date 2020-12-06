import jwt from 'jsonwebtoken'
import http_error from 'http-errors'
import {Request,Response,NextFunction} from 'express'

async function validate(req:Request,res:Response,next:NextFunction){
    const { token } = req.headers;

    if(!token) return next(new http_error.Unauthorized())

    const [,davi] = token;

        //trocar senha pra .Env.auth_pass (mais seguro)
        jwt.verify(davi,'kureijichesu',(err,payload) =>{
            if(err) return next(new http_error.Unauthorized())
            
            next()
        })  
}

export default validate;

