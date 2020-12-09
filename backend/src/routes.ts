import {Router} from 'express';
import UserController from './Controllers/UserController';
import TagController from './Controllers/TagController';
import validate from './authorization/auth'
import authController from './Controllers/authController';
import multer from 'multer';
import imgController from './Controllers/imgController';
import uploadConfig from './config/upload';
import ChatController from './Controllers/ChatController';

const routes = Router();
const upload = multer(uploadConfig);
//rota de login
routes.post('/login',authController.createHash);

routes.post('/users',UserController.create);

//Rotas do usuario
routes.use(validate) 
routes.get('/',(request, response)=>{response.json({message:"Seja Bem-Vindo ao AleatoriChat"})});
routes.get('/users',UserController.Show);
routes.get('/users/:id',UserController.index);
routes.put('/users',UserController.Update_password);
routes.post('/imguploadUser',upload.single('image'),imgController.uploadImgUser);
//chats
routes.get('/Chats', ChatController.Index);
routes.post('/Chats', ChatController.CreateChat);
//rotas da Tag
routes.get('/Tags', TagController.Show);
routes.get('/Tags/:id', TagController.fromview);
routes.post('/Tags', TagController.CreateTags);

export default routes;



