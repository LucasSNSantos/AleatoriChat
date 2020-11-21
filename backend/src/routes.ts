import {Router} from 'express';
import UserController from './Controllers/UserController';
const routes = Router();

routes.get('/users',UserController.Show);
routes.get('/users/:id',UserController.index);
routes.post('/users',UserController.create)
routes.get('/',(request, response)=>{response.json({message:"Seja Bem-Vindo ao AleatoriChat"})});

export default routes;