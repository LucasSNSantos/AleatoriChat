import React from 'react'
import IO from "socket.io-client"
const ENDPOINT = 'http://127.0.0.1:8080'

function page(){
    const socket = IO(ENDPOINT)
    
    return(
        <div id="content_wrapper">
            <header></header>
            <div className="chat_messages"></div>
            <button></button>
           
        </div>
    
    )
}

export default page;
