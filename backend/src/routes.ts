import {Router} from 'express';
import UserController from './Controllers/UserController';
import TagController from './Controllers/TagController';
const routes = Router();

//Rotas do usuario
routes.get('/users',UserController.Show);
routes.get('/users/:id',UserController.index);
routes.post('/users',UserController.create)
routes.post('/redeempssd',UserController.Update_password)
routes.get('/',(request, response)=>{response.json({message:"Seja Bem-Vindo ao AleatoriChat"})});


//rotas da Tag
routes.get('/Tags', TagController.Show);
routes.post('/Tags', TagController.CreateTags);


export default routes;



