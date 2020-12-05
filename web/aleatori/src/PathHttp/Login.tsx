import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/global.css'
import '../pages/Login.css'
import react_logo from '../aleatori.png'
import api from '../api/api'
import Navbar from '../Components/NavBar'
import User from '../../../../backend/src/Models/Usuario'
import { AxiosResponse } from 'axios'
/*import useAxios from '../hooks/useAxios'

interface Usuario{
    username:string;
    user_password:string;
    user_email:string;
    user_id:number;
    securityKey:string;
    description:string;
}*/

function Login(){

    return (
        <div id="landing-page">
            
            <div className="main">
                <Navbar/>
                <img src={react_logo} width="50" height="50" alt="LOGINHO" id="loginho"/>
                <form className="user_auth">
                    <p>User: </p>
                    <input id="username_" className="user_input"></input>
                </form>
                <form className="pass_auth">
                    <p>Password:</p>
                    <input id="pass_" type="password" className="pass_input"></input>
                </form>
                <div className="frg-pass">
                    <Link to="/RedeemPasswd">
                        <p className="frg-password">
                            Forgot your password?
                        </p>
                    </Link>
                </div>
                <Link to="/Register">
                    <a className="register">
                        Sign-Up!
                    </a>
                </Link>
                <a className="btn_go" role="button" onClick={Validate_Login}> 
                    Sign In!
                </a>
            </div>
        </div>
    );

    async function Validate_Login(){
       
        try{
            const username = document.querySelector('input[id="username_"]') as HTMLInputElement;
            const user_password = document.querySelector('input[id="pass_"]') as HTMLInputElement;

            if(username.value !== "" && user_password.value !== ""){
                const data = {
                    username:username.value,
                    user_password:user_password.value,
                }
                const token : void | AxiosResponse = await api.post('login',data).catch(function (erro){
                    if(erro.response){
                        throw Object.assign(new Error( erro.response.data),{code:400});
                    }
                });
                const tkn = token as AxiosResponse;
                 alert(tkn.data.hash);

                const user = await api.get('users');            
                const users = user.data as Array<User>;

                const userFound = users.find(users => users.username === data.username) as User; 
                
                if(user_password.value !== userFound.user_password)
                    throw Object.assign(new Error( "Senha ou Usuário inválidos."),{code:400});

                window.location.pathname = "MainPage"
            }else 
                throw Object.assign(new Error( "Algum campo não foi preenchido."),{code:400});
           
        }catch(error){
            alert(error);
        }

    }
   
}


export default Login; 