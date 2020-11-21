import {ErrorRequestHandler} from 'express'
import {ValidationError} from 'yup'

interface ValidationErrors{
    [key: string]: string[]
}

const errors:ErrorRequestHandler = (erro,request,response,next) =>{

    return response.status(500).json({Message:'Internal Server Error'})
}

export default errors;

