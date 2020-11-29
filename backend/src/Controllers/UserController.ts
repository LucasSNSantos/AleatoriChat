import {Request,Response} from 'express';
import db from '../Database/connection';

export default {

    async Show(req:Request, res:Response) 
    {
        try
        {
            const user = await db('tb_user').select('*');
            return res.status(200).json(user);
        }catch(error)
        {
            console.log(error)
        }
    },

    async index(req: Request, res:Response){
            const { id } = req.params;

           try
            {
                const user = await db('tb_user').select('*').where('id',id); 
                return res.status(200).json(user);
            }catch(error)
            {
                return res.status(404).send("Erro");
            }
    },

    async create(request: Request, response:Response){
        const { username,user_password,user_email,description} = request.body;
        const data = {
            username: username,
            user_password:user_password,
            user_email:user_email,
            securitykey:"0000",
            description:description
        }
        try{      
            await db('tb_user').insert(data);
            //trigger de cadastro
        
            if(await db('tb_user').select('username').where('username',data.username)){
                return response.status(201).send('OK, cadastrado.');            
            }
        }catch(error){
            //Pegou a exception do banco ---
            return response.status(400).send('Nome ou Email já cadastrados.');
        }
        
    },

    //Mostra *TODAS* as permissoes do usuario
    async UserPermissions(req:Request, res: Response)
    {
        const {user_id} = req.params;
        console.log(req.params);
        try
        {
            const perm = await db('tb_user as u').select("user_id","username","p.description").from('tb_user as u')
            .rightJoin('tb_permission_user as pu', 'pu.fk_user_id', 'u.user_id')
            .rightJoin('tb_permissions as p', 'p.id_permission', 'pu.fk_permission_id').where('user_id', user_id);
            
            return res.status(200).json(perm);
        }catch(error)
        {
            console.log(error);
        }

    },

    //Cria uma nova Permissao
    async CreatePermissions(req:Request, res:Response)
    {
        const data = {
            description: req.body.description
        }
        try
        {
            await db('tb_permissions').insert(data);

            return res.send("Deu certo a criacao da permissao");
        }catch(error)
        {
            return res.send("Erro ao criar a permissao");
        }
    },  

    //Associa uma permissao a um usuario
    async AddPermission(req:Request, res:Response)
    {
        const data = {
            fk_user_id: req.body.user_id,
            fk_permission_id: req.body.permission_id
        }

        try
        {
            console.log(data);
            await db('tb_permission_user').insert(data);
            return res.send("Criado com sucesso");

        }catch(error)
        {
            return res.send("Erro");
        }
    },

    async IndexPermissions(req:Request, res:Response)
    {
        try
        {
            const result = await db('tb_permissions').select("*");
            console.log(result);
            return res.status(200).json(result);
        }catch(error)
        {
            return res.send("Erro");
        }
    }

}