import {Router} from 'express';
import UserController from './Controllers/UserController';
import TagController from './Controllers/TagController';
import ChatController from './Controllers/ChatController';
//import alo from './Database/alo';
import PostController from './Controllers/PostController';

const routes = Router();

//Rotas do usuario
routes.get('/users',UserController.Show);
routes.get('/users/:id',UserController.index);
routes.post('/users',UserController.create)
routes.get('/Permissions/:user_id', UserController.UserPermissions);
routes.get('/Permissions', UserController.IndexPermissions);
routes.post('/Permissions', UserController.CreatePermissions);
routes.post('/Permissions/user', UserController.AddPermission);
routes.post('/redeempssd',UserController.Update_password)


//chats
routes.get('/Chats', ChatController.Index);
routes.post('/Chats/Create', ChatController.CreateChat);

//rotas da Tag
routes.get('/Tags', TagController.Show);
routes.post('/Tags', TagController.CreateTags);

routes.get('/',(request, response)=>{response.json({message:"Seja Bem-Vindo ao AleatoriChat"})});

export default routes;



