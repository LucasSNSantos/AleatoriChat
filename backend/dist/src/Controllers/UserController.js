"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../Database/connection"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class UserController {
    async Show(req, res) {
        const user = await connection_1.default('tb_user').select('*');
        return res.status(200).json(user);
    }
    async Update_password(req, res) {
        const { id, new_pass } = req.body;
        try {
            console.log(`${id} ${new_pass}`);
            await connection_1.default('tb_user').update('user_password', new_pass).where('user_id', id);
            return res.status(200).json({ id, new_pass });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ id, new_pass });
        }
    }
    async index(req, res) {
        const { id } = req.params;
        const user = await connection_1.default('tb_user').select('*').where('id', id);
        return res.status(200).json(user);
    }
    async create(request, response) {
        const { username, user_password, user_email, description } = request.body;
        console.log(request.body);
        const data = {
            username: username,
            user_password: user_password,
            user_email: user_email,
            securitykey: "0000",
            description: description
        };
        try {
            await connection_1.default('tb_user').insert(data);
            //trigger de cadastro
            if (await connection_1.default('tb_user').select('username').where('username', data.username)) {
                //Defining mailer
                const transporter = nodemailer_1.default.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "noreply.aleatorichat@gmail.com",
                        pass: "Ale@torius912Chat",
                    },
                    tls: {
                        // Fix for rejection because of localhost
                        rejectUnauthorized: false
                    }
                });
                // Send mail (provavelmente rolava fzr uma classe pra deixar bonito but it's life)
                var info = await transporter.sendMail({
                    from: `"AleatoriChat" <noreply.aleatorichat@gmail.com>`,
                    to: `${data.user_email}`,
                    subject: "Hello new AleatoriUser! ✔",
                    text: "Hello world?",
                    html: "<b>Hello world?</b>",
                });
                console.log(`${info}\n PASSOU`);
                return response.status(201).send('Você foi cadastrado com sucesso. Bem vindo ao AleatoriChat!.');
            }
        }
        catch (error) {
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
    }
    //Mostra *TODAS* as permissoes do usuario
    async UserPermissions(req, res) {
        const { user_id } = req.params;
        console.log(req.params);
        try {
            const perm = await connection_1.default('tb_user as u').select("user_id", "username", "p.description").from('tb_user as u')
                .rightJoin('tb_permission_user as pu', 'pu.fk_user_id', 'u.user_id')
                .rightJoin('tb_permissions as p', 'p.id_permission', 'pu.fk_permission_id').where('user_id', user_id);
            return res.status(200).json(perm);
        }
        catch (error) {
            console.log(error);
        }
    }
    //Cria uma nova Permissao
    async CreatePermissions(req, res) {
        const data = {
            description: req.body.description
        };
        try {
            await connection_1.default('tb_permissions').insert(data);
            return res.send("Deu certo a criacao da permissao");
        }
        catch (error) {
            return res.send("Erro ao criar a permissao");
        }
    }
    //Associa uma permissao a um usuario
    async AddPermission(req, res) {
        const data = {
            fk_user_id: req.body.user_id,
            fk_permission_id: req.body.permission_id
        };
        try {
            console.log(data);
            await connection_1.default('tb_permission_user').insert(data);
            return res.send("Criado com sucesso");
        }
        catch (error) {
            return res.send("Erro");
        }
    }
    async IndexPermissions(req, res) {
        try {
            const result = await connection_1.default('tb_permissions').select("*");
            console.log(result);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.send("Erro");
        }
    }
}
exports.default = new UserController();
