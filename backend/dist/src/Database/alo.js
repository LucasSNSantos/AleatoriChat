"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../Database/connection"));
async function Teste() {
    return connection_1.default('tb_tags').select('*');
}
exports.default = Teste;
