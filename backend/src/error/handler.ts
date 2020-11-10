import {ErrorRequestHandler} from 'express'
import {ValidationError} from 'yup'

interface ValidationErrors{
    [key: string]: string[]
}

const errors:ErrorRequestHandler = (erro,request,response,next) =>{

    if(erro instanceof ValidationError){
        let errors:ValidationErrors = {}

        erro.inner.forEach(err =>{
            errors[err.path] = err.errors
        })

        return response.status(400).json({message:'Validation Error',errors})
    }

    return response.status(500).json({Message:'Internal Server Error'})
}

