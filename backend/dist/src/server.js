"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("express-async-errors");
require("./Database/connection");
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const userController_1 = __importDefault(require("./socketUtils/userController"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
const server = http_1.createServer(app);
const io = new socket_io_1.Server(server, { cors: { origin: '*' } });
const user_bot = 'Aleatori Bot';
io.on('connection', async (socket) => {
    socket.on('setupChat', async ({ name, chat_id }) => {
        const user = await userController_1.default.getUserbyId(socket.id);
        if (!user)
            socket.emit('serverError', 'user not found!');
        else {
            //user joined the chat 
            socket.join(user.chat_id);
        }
    });
    socket.on('disconnect', async () => {
        const user = await userController_1.default.getUserbyId(socket.id);
        await userController_1.default.deleteUserbyId(socket.id);
        try {
            io.to(user.chat_id).emit('serverMessage', { name: user_bot, message: `The user ${user.name} has left the chat` });
        }
        catch (e) { }
    });
});
server.listen(4444, () => {
    console.log("Servidor Online em http://localhost:4444/");
});
