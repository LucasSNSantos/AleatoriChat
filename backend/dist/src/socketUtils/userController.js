"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../Database/connection"));
class UserController {
    async joinUser(id, name, chat_id) {
        const user = { id: id, name: name, chat_id: chat_id };
        try {
            await connection_1.default('onlineUsers').insert(user);
        }
        catch (e) {
            return null;
        }
        return user;
    }
    async getUserbyId(id) {
        const users = await connection_1.default('onlineUsers').where('id', id).select('*');
        const user = users[0];
        if (!user)
            return null;
        return user;
    }
    async deleteUserbyId(id) {
        try {
            await connection_1.default('onlineUsers').where('id', id).delete();
        }
        catch (e) {
            return null;
        }
        return true;
    }
}
exports.default = new UserController();
