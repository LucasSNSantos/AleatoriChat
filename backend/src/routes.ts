import {response, Router} from 'express';
import AccountsController from './Controllers/AccountsController';
const routes = Router();

routes.get('/Accounts/:id',AccountsController.Show);
routes.get('/',(request, response)=>{response.json({message:"Aleatori Chat"})});

export default routes;