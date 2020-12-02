"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../Database/connection"));
class TagController {
    async Show(req, res) {
        try {
            const tags = await connection_1.default('tb_tags').select('*');
            return res.status(200).json(tags);
        }
        catch (error) {
            console.log("Deu erro");
        }
    }
    async CreateTags(req, res) {
        const data = {
            tag_name: req.body.tag_name,
        };
        try {
            await connection_1.default('tb_tags').insert(data);
            return res.status(200).send("Tag " + data.tag_name + " inserida com sucesso");
        }
        catch (error) {
            console.log("Error");
        }
    }
}
exports.default = new TagController();
