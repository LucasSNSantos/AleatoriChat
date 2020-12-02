"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostController {
    async CreatePost(req, res) {
        const data = {
            censorship: req.body.censorship,
            spoiler: req.body.spoiler,
            fk_chat_user: req.body.fk_chat_user //FK do usuario com o chat
        };
    }
}
exports.default = new PostController();
