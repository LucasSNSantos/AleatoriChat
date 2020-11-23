//import {Link} from 'react-router-dom';
import React from 'react';
import Navbar from '../Components/NavBar';
import api from '../api/api'
import '../pages/Register.css';

export default function Registro()
{
   // const username = 

    return (
        <>
        <Navbar></Navbar>
            <div className="Register-Aleatori-Box">
                <h1 id="Register-Aleatori-Box-Header">
                    Registre-se no Aleatori Chat!
                </h1>
                <form method="get" action="/Login">
                    <div className="input-container">
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Usuario </h2>
                            <input id="username_" className="username" type="Username" name="usuario" placeholder="Nome de usuario" />
                        </div>
                            
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Senha </h2>
                            <input id="pass_" className="pass" type="Username" name="senha" placeholder="Senha" />
                        </div>

                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Email </h2>
                            <input id="email_" className="email" type="Username" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <h2 id="Register-Aleatori-Box-input"> Description </h2>
                            <input id="description_" className="description" type="Username" name="key" placeholder="descr" />
                        </div>
                    </div>
                        <button className="register-button" onClick={isGood}>
                            Registrar
                        </button>
                </form>
            </div>
            </>
    );
    async function isGood(){
        const username = document.querySelector('input[id="username_"]') as HTMLInputElement;
        const user_password = document.querySelector('input[id="pass_"]') as HTMLInputElement;
        alert("valor : "+ user_password);
        const user_email = document.querySelector('input[id="email_"]') as HTMLInputElement;
        const description = document.querySelector('input[id="description_"]') as HTMLInputElement;
        
        const data = {
            username:username.value,
            user_password:user_password.value,
            user_email:user_email.value,
            description:description.value
        }
        await api.post('users',data);
        alert(data);

    }
   
}
