import {Router} from 'express';
import UserController from './Controllers/UserController';
import TagController from './Controllers/TagController';
import validate from './authorization/auth'
import authController from './Controllers/authController';
const routes = Router();



//rota de login
routes.get('/',(request, response)=>{response.json({message:"Seja Bem-Vindo ao AleatoriChat"})});
routes.get('/login',authController.createHash)

//Rotas do usuario
routes.use(validate)
routes.get('/users',UserController.Show);
routes.get('/users/:id',UserController.index);
routes.post('/users',UserController.create)
routes.post('/redeempssd',UserController.Update_password)

//rotas da Tag
routes.get('/Tags', TagController.Show);
routes.post('/Tags', TagController.CreateTags);

export default routes;



