import {Link} from 'react-router-dom';
import React from 'react';
import Navbar from '../Components/NavBar';
import api from '../api/api'
import '../pages/Register.css';

export default function Registro()
{
    return (
        <><Navbar></Navbar>
            <div className="Register-Aleatori-Box">
                <h1 id="Register-Aleatori-Box-Header">
                    Registre-se no Aleatori Chat!
                </h1>
                <form method="get" action="/Login">
                    <div className="input-container">
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Usuario </h2>
                            <input className="username" type="Username" name="usuario" placeholder="Nome de usuario" />
                        </div>
                            
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Senha </h2>
                            <input className="pass" type="Username" name="senha" placeholder="Senha" />
                        </div>

                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Email </h2>
                            <input className="email" type="Username" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Description </h2>
                            <input className="description" type="Username" name="key" placeholder="descr" />
                        </div>
                    </div>
                    <Link to="/Login" className="enter-login">
                        <button className="register-button" onClick={isGood}>
                            Registrar
                        </button>
                    </Link>
                </form>
            </div></>




    );
}

async function isGood(){
    const username = document.getElementsByClassName('username')
    const user_password = document.getElementsByClassName('pass')
    const user_email = document.getElementsByClassName('email')
    const description = document.getElementsByClassName('description')
    const data = {
        username:username.item,
        user_password:user_password.item,
        user_email:user_email.item,
        description:description.item,
    }
    await api.post('users',data)


}