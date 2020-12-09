import React,{useContext} from 'react'
import '../pages/global.css'
import '../pages/chat.css'
import LoginContext from '../context/loginContext';
import logo from '../aleatori.png'
import IO from "socket.io-client"
import Graph from "../Grafo/Classes/Graph";
import Vertex from '../Grafo/Classes/Vertex';
import edge from '../Grafo/Classes/Edge';
import api from '../api/api';
import { AxiosResponse } from 'axios';

const ENDPOINT = 'http://localhost:4444'

interface User{
    username:string;
    user_id:number;
    user_email:string;
    securitykey:string;
    description:string;
    img_src:string;
    afinity:string;
}

function Chat(){
    
    const socket = IO(ENDPOINT,{autoConnect:true})
    const {user} = useContext(LoginContext)
    const grafo = new Graph<User>(false);


    async function enterTheParty(event:React.MouseEvent<HTMLHeadingElement, MouseEvent>){
        event.preventDefault();
        console.log(user)
        if(typeof(user) == undefined)
            return;
        //@ts-ignore
        const new_usr = new Vertex<User>(user?.user_id,user?.username,user)
        
        grafo.AddVertex(new_usr);
        console.log(grafo);
        if(grafo.NumVertex()>2 ){
            grafo.list_Vertex.forEach(async element => {
            
                if(!grafo.is_bounded(new_usr,element))
                    grafo.AddEdge(new edge(await calcweight(new_usr.id,element.id),new_usr,element,false))
            });
        }
        //@ts-ignore
        //grafo.Dijkstra(user?.user_id,1) dkstra
        //conectar (tantos usuarios)
    }
    return(
        <div id="content_wrapper">
            <div className="Members">
                Members
                {user?.username}
            </div>
            <div id="chat">
                <header>
                    <img src={logo} alt="logo" width={50} height={50}/>
                    <h1 onClick={enterTheParty}>AleatoriChat</h1>
                </header>
                <div className="chat_messages"></div>
                <footer>
                    <input id="chat_aux" className="chat_feed" placeholder="Type here:"/>
                    <button></button>
                </footer>
            </div>
            
        </div>
    
    )
    interface tag_aux{
        id:number;
    }
    async function calcweight(af1:number, af2:number ){
        
        const tag1 = await api.get(`/Tags/1`,{
            headers:{
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3NDgwNzc3LCJleHAiOjE2MDc1NjcxNzd9.j37H9Iyy3Ou21sCgMxMIlz5GopV4AdnKVZgYfQuR2-Q'
            }
        });
        const tag2 = await api.get(`/Tags/8`,{
            headers:{
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3NDgwNzc3LCJleHAiOjE2MDc1NjcxNzd9.j37H9Iyy3Ou21sCgMxMIlz5GopV4AdnKVZgYfQuR2-Q'
            }
        });
        const id1 = tag1.data as tag_aux[];
        const id2 = tag2.data as tag_aux[];
        var peso:number=0;
        
        for(let i = 0 ; i<id1.length;i++){
            for(let j = 0 ; j<id2.length;j++){
                if(id1[i] !== id2[j]){
                    peso += +id1[i].id as number;
                    peso += +id2[j].id as number;
                }
            }
        }
        return peso;
    }   
}

export default Chat;
