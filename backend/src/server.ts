import express from 'express';
import routes from './routes';
import 'express-async-errors'
import './Database/connection'
import cors from 'cors';
import {Server,Socket} from 'socket.io'
import {createServer} from 'http'
import userController from './socketUtils/userController'
import onlineUser from './Models/onlineUser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = createServer(app)
const io = new Server(server,{cors:{origin:'*'}})
const user_bot = 'Aleatori Bot'

io.on('connection',async (socket:Socket) =>{
    
    
    socket.on('setupChat',async ({name,chat_id}) =>{
        const user = await userController.getUserbyId(socket.id)

        if(!user) socket.emit('serverError','user not found!')
        else{
            //user joined the chat 
            socket.join(user!.chat_id);
        }
    })
    

    socket.on('disconnect',async() =>{
        const user = await userController.getUserbyId(socket.id)
        //const is_Deletedr = await userController.deleteUserbyId(socket.id)
        
        io.to(user!.chat_id).emit('serverMessage',{name:user_bot,message:`The user ${user!.name} has left the chat`})
    })
})

server.listen(4444,()=> {
    console.log("Servidor Online em http://localhost:4444/");
});