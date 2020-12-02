import React from 'react'
import '../pages/global.css'
import '../pages/chat.css'
import logo from '../aleatori.png'
import IO from "socket.io-client"
const ENDPOINT = 'http://localhost:4444'

function page(){
    
    const socket = IO(ENDPOINT,{autoConnect:true})
    
    return(
        <div id="content_wrapper">
            <div id="chat">
                <header>
                    <img src={logo} alt="logo" width={50} height={50}/>
                    <h1>AleatoriChat</h1>
                </header>
                <div className="chat_messages"></div>
                <footer>
                    <button></button>
                </footer>
            </div>
        </div>
    
    )
}

export default page;
