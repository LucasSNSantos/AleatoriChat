import jwt from 'jsonwebtoken'
import http_error from 'http-errors'
import {Request,Response,NextFunction} from 'express'

async function validate(req:Request,res:Response,next:NextFunction){
    const {token} = req.headers;
    if(req.url.includes('/uploads')){
        next()
    }else{
    
    if(!token) return next(new http_error.Unauthorized())

        //trocar senha pra .Env.auth_pass (mais seguro)
        jwt.verify(token.toString(),'kureijichesu',(err,payload) =>{
            if(err) return next(new http_error.Unauthorized())
            
            next()
        })  
    }
}

export default validate;

