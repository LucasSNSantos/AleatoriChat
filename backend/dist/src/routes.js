"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./Controllers/UserController"));
const TagController_1 = __importDefault(require("./Controllers/TagController"));
//import ChatController from './Controllers/ChatController';
const alo_1 = __importDefault(require("./Database/alo"));
const routes = express_1.Router();
//Rotas do usuario
routes.get('/users', UserController_1.default.Show);
routes.get('/users/:id', UserController_1.default.index);
routes.post('/users', UserController_1.default.create);
routes.get('/Permissions/:user_id', UserController_1.default.UserPermissions);
routes.get('/Permissions', UserController_1.default.IndexPermissions);
routes.post('/Permissions', UserController_1.default.CreatePermissions);
routes.post('/Permissions/user', UserController_1.default.AddPermission);
routes.post('/redeempssd', UserController_1.default.Update_password);
//chats
//routes.get('/Chats', ChatController.Index);
console.log(alo_1.default);
//rotas da Tag
routes.get('/Tags', TagController_1.default.Show);
routes.post('/Tags', TagController_1.default.CreateTags);
routes.get('/', (request, response) => { response.json({ message: "Seja Bem-Vindo ao AleatoriChat" }); });
exports.default = routes;
