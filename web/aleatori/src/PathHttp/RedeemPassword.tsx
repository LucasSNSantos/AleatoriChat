import React from 'react';
import Navbar from '../Components/NavBar';
import api from '../api/api';
import '../pages/RedeemPassword.css';
import User from '../../../../backend/src/Models/Usuario'
import { AxiosResponse } from 'axios';

export default function RedeemPassword()
{
    const token = localStorage.getItem('token');
    return(
        <>
            <Navbar></Navbar>            
                <div className="Redeem-box">
                    <form method="get" className="former-rederm">
                        <div className="input-containere">
                            <div>
                                <h2 className="Redeem-Aleatori-Box-input"> Email </h2>
                                <input className="BOX" id="email_" type="BOX"/>
                            </div>
                                
                            <div>
                                <h2 className="Redeem-Aleatori-Box-input"> Security-Key </h2>
                                <input className="BOX" id="scrtykey_" type="BOX"/>
                            </div>
                            <div>
                                <h2 className="Redeem-Aleatori-Box-input"> New Password</h2>
                                <input className="BOX" id="pass" type="BOX"/>
                            </div>
                            <div>
                                <h2 className="Redeem-Aleatori-Box-input"> Confirm New Password </h2>
                                <input className="BOX" id="conf_pass" type="BOX"/>
                            </div>
                        </div>
                        <button className="Redeem-btn" onClick={doRedeemPassword}>
                            Redeem
                        </button>
                    </form>
                </div>
        </>
    );

    async function doRedeemPassword(){
        try{
            const user_key = document.querySelector('input[id="scrtykey_"]') as HTMLInputElement;
            const user_email = document.querySelector('input[id="email_"]') as HTMLInputElement;
            const user_new_pass = document.querySelector('input[id="pass"]') as HTMLInputElement;
            const user_pass_conf = document.querySelector('input[id="conf_pass"]') as HTMLInputElement;
            const re = /\S+@\S+\.\S+/;


            if(user_key.value !== "" 
            && user_email.value !== "" 
            && user_new_pass.value !== ""
            && user_pass_conf.value !== ""){

                if(!re.test(String(user_email.value).toLowerCase()))
                    throw Object.assign(new Error( "E-mail não válido."),{code:400});

                const data = {
                    securityKey: user_key.value,
                    user_email: user_email.value,
                }
                
                //confirmar
                const user = await api.get('users',{
                    headers:{
                        'token': token,
                    }
                });            
                const users = user.data as Array<User>;
                
                const userFound = users.find(users => users.user_email === data.user_email) as User;
                
                 const sending= {
                    new_pass : user_new_pass.value,
                    id: userFound.user_id,
                }

                if(userFound.securitykey !== data.securityKey)
                    throw Object.assign(new Error( `SecurityKey is not the same for ${data.user_email}.`),{code:400});
                console.log(userFound.user_id)
                //update
                await api.post('userspass',sending,{
                    headers:{
                        'token': token,
                    }
                }).catch(function (erro){
                    if(erro.response){
                        alert(erro.response.data)
                    }
                });
                await alert(`Enviando um email de confirmação para ${user_email.value}`)
                window.location.pathname = "/"
            }else 
                throw Object.assign(new Error( "Algum campo não foi preenchido."),{code:400});
           
        }catch(error){
            alert(error);
        }

    }

}