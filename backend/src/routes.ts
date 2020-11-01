import {response, Router} from 'express';
import AccountsController from './Controllers/AccountsController';
import UserController from './Controllers/UserController';
const routes = Router();

routes.get('/Accounts/:id',AccountsController.Show);
routes.get('/User', UserController.index);
routes.get('/',(request, response)=>{response.json({message:"Aleatori Chat"})});

export default routes;