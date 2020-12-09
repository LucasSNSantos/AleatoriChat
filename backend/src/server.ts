import express from 'express';
import routes from './routes';
import 'express-async-errors';
import './Database/connection';
import cors from 'cors';
import {Server,Socket} from 'socket.io';
import {createServer} from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = createServer(app);

const io = new Server(server,{cors:{origin:'*'}});
const user_bot = 'Aleatori Bot';

io.on('connection',async (socket:Socket) =>{
    
    // socket.on('joinChat'user =>{
        
    // })
    // socket.on('leftChat'user =>{
        
    // })
    // socket.on('joinRoom'user =>{
        
    // })
    // socket.on('leftRoom',user =>{

    // })
    // socket.on('sendMessage',msg =>{

    // })
    // socket.on('receiveMessage',msg =>{

    // })

    // socket.on('disconnect',user =>{

    // })

})

server.listen(4444,()=> {
    console.log("Servidor Online em http://localhost:4444/");
});