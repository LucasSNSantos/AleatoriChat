import {Request, Response} from 'express';

export default{
    async Show(request: Request, response:Response) {
        const {id} = request.params;
        return response.status(201).json({message:`Accounts here! Conta: ${id}`});
    }
};