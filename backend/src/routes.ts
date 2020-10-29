import {response, Router} from 'express';
import AccountsController from './Controllers/AccountsController';
import UsuarioController from './Controllers/UsuarioController';
const routes = Router();

routes.get('/Accounts/:id',AccountsController.Show);
routes.get('/Usuario', UsuarioController.index);
routes.get('/',(request, response)=>{response.json({message:"Aleatori Chat"})});

export default routes;