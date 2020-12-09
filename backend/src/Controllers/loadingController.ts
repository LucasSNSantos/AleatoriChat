import {Request,Response} from 'express'
import Vertex from '../Grafo/Classes/Vertex'
import Graph from '../server'

export default {
    async enterTheParty(req:Request,res:Response){
        const {username} = req.body;
        const id = (Graph.NumVertex()) + 1;

        const vertex = {id,username}
        const vertex2 = {id:5,username:'davi'}
        Graph.AddVertex(new Vertex(vertex.id,vertex.username))

        await Graph.onEnterTheParty(vertex2).then(id =>{
            return res.status(200).json({id})
        }).catch(e =>{
            return res.status(400).json({e})
        })
    },
}