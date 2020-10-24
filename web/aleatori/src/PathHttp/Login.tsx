import React from 'react';
import {Link} from 'react-router-dom'; 
import '../pages/Login.css';

function Login(){
    return(
        <div className="Login-Aleatori">
            
            <form className="Login-Aleatori-Box">
                <h1 id="Login-Aleatori-Box-Header">Aleatori Chat</h1>
                <h2 id="Login-Aleatori-Box-input">Username</h2>
                <input type="Username"/>
                <h2 id="Login-Aleatori-Box-input">Password</h2>
                <input type="Password"/>
                <Link id="Login-Aleatori-Box-forget-passwd" to="/">
                    Esqueceu a senha?
                </Link>
            </form>
        </div>
        
    );
}

export default Login;