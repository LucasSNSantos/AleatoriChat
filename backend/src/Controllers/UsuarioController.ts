import {Request,Response} from 'express';
import db from '../Database/connection';

export default {

    async  index(req:Request, res:Response) 
    {
        const user = await db('usuario').select('*');
        console.log(user);
        return res.json(user);
    }


}