import express from 'express';
import routes from './routes';
import 'express-async-errors';
import './Database/connection';
import cors from 'cors';
import {Server,Socket} from 'socket.io';
import {createServer} from 'http';
import path from 'path';
import Graph from './Grafo/Classes/Graph'
export default Graph;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'uploads')))
const server = createServer(app);

const io = new Server(server,{cors:{origin:'*'}});
const user_bot = 'Aleatori Bot';

io.on('connection',async (socket:Socket) =>{
    console.log('Socket connectado')
    
    socket.on('joinSala',({id}) =>{
        socket.join(id)
    })
    socket.on('sendMessage',msgUser =>{
        socket.to(msgUser.sala.id).emit('receivedMessage',msgUser.body)
    })
    socket.on('receiveMessage',msg =>{
        socket.emit('renderMessage',msg)
    })
    //  socket.on('joinChat',user =>{
    //     console.log(user + " CONECTADOOOOO")
    //  })
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