import {Request, Response} from 'express';
import knex from '../../knexfile';


export default{
    async Show(request: Request, response:Response) {
        const {id} = request.params;
        return response.status(201).json({message:`Accounts here! Conta: ${id}`});
    }
};