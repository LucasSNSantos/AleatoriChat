import React from 'react'
import logo from '../img/logox.svg'
import '../styles/landing.css'

function Landing(){
    return (
        <div id="page-landing">
            <aside>
                <em>
                    <img src={logo} width={40} height={40} alt="logo"/>
                </em>
                <h2>Meetting people that actually like you :)</h2>
                <p>AleatoriChat</p>
            </aside>
            <div className="login">
                <input className="user"type="text"/>
                <input className="psw" type="text"/>
                <button className="btn_user">
                    X    
                </button>             
            </div>
        </div>
    );
}

export default Landing;