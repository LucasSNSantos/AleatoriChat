import React from 'react';
import logo from '../logo.svg';
import '../pages/Landing.css';
import {Link} from 'react-router-dom'; 
import NavBar from '../Components/NavBar';

function Landing() {
    return (
        <div className="App">
             <NavBar></NavBar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Link to="/login" className="enter-login">
                    <button id="login-button">
                        Fazer Login
                    </button>
                </Link>
                <Link className="App-link" to="/createAccount">
                    Não possui Conta? Registre-se!
                </Link>
            </header>
        </div>
    );
}

export default Landing;