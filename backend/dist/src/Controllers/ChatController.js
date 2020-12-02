"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async Index(req, res) {
        try {
            // const response = await db('tb_chat_sala').select('*');
            return res.status(200).json({ Message: "Oi eu sou o Puck" });
        }
        catch (error) {
            console.log(error);
        }
    }
};
