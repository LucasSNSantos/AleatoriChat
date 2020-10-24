import React from 'react';
import logo from '../logo.svg';
import '../pages/Landing.css';
import {Link} from 'react-router-dom'; 

function Landing() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 id="h1-aleatori">
                    Aleatori Chat
                    <span></span>
                    <span></span>
                </h1>

                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/login" className="enter-login">
                    <button id="login-button">
                        Fazer Login
                    </button>
                </Link>
                
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Não possui Conta? Registre-se!
                </a>
            </header>
        </div>
    );
}

export default Landing;