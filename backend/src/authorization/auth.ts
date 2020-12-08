import jwt from 'jsonwebtoken'
import http_error from 'http-errors'
import {Request,Response,NextFunction} from 'express'

async function validate(req:Request,res:Response,next:NextFunction){
<<<<<<< HEAD
    const {token} = req.headers;
=======
    const { token } = req.headers;
>>>>>>> c79f6e690eb88b073855d7ce28ed82a3912bf35c
    
    if(!token) return next(new http_error.Unauthorized())

        //trocar senha pra .Env.auth_pass (mais seguro)
        jwt.verify(token.toString(),'kureijichesu',(err,payload) =>{
            if(err) return next(new http_error.Unauthorized())
            
            next()
        })  
}

export default validate;

