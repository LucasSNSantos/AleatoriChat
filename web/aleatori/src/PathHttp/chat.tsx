import React,{useContext, useEffect} from 'react'
import '../pages/global.css'
import '../pages/chat.css'
import api from '../api/api'
import LoginContext from '../context/loginContext';
import logo from '../aleatori.png'
import IO from "socket.io-client"
import chat from '../utils/chat/chatFunctions';
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
    const chate  = new chat();
    let id = undefined;

    useEffect(()=>{
        (async() =>{
            const data = {username:user?.username}
            id = await api.post('sala',data)
        })()
    })

    function send(){
        var buffer = document.querySelector('#chat_aux') as HTMLInputElement;
        const str = user?.username as string;
        chate.sendMessage(buffer.value,document.querySelector('.chat_messages') as HTMLDivElement,str)
        buffer.value = '';
    }
    if(id != undefined) socket.emit('joinSala',{id})
    
    return(
        <div id="content_wrapper">
            <div className="Members">
                Members
                {"\n"+user?.username}
            </div>
            <div id="chat">
                <header>
                    <img src={logo} alt="logo" width={50} height={50}/>
                    <h1>AleatoriChat</h1>
                </header>
                <div className="chat_messages"></div>
                <footer>
                    <input id="chat_aux" className="chat_feed" placeholder="Type here:"/>
                    <button id="send_btn" onClick={send}>
                        SEND
                    </button>
                </footer>
            </div>
            
        </div>
    
    )
}

export default Chat;
