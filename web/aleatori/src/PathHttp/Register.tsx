import {Link} from 'react-router-dom';
import React from 'react';
import Navbar from '../Components/NavBar';
import '../pages/Register.css';

export default function Registro()
{
    return (
        <><Navbar></Navbar>
            <div className="Register-Aleatori-Box">
                <h1 id="Register-Aleatori-Box-Header">
                    Registre-se no Aleatori Chat
                </h1>
                <form method="get" action="/Login">
                    <div className="input-container">
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Usuario </h2>
                            <input type="Username" name="usuario" placeholder="Nome de usuario" />
                        </div>

                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Senha </h2>
                            <input type="Username" name="senha" placeholder="Senha" />
                        </div>

                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Email </h2>
                            <input type="Username" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Chave Secreta </h2>
                            <input type="Username" name="key" placeholder="Email" />
                        </div>
                    </div>
                    <Link to="/login" className="enter-login">
                    <button id="register-button">
                        Registrar
                    </button>
                </Link>
                </form>
            </div></>




    );
}
