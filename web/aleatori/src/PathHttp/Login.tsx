import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../pages/global.css'
import '../pages/Login.css'
import Aleatori_Logo from '../aleatori.png'
import Navbar from '../Components/NavBar'
import loginContext from '../context/loginContext'

function Login(){
    const { handleLogin,token,user} = useContext(loginContext)
    const history = useHistory()
    
    async function validate_login_by_PF(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()

        const username = document.querySelector('.user_input') as HTMLInputElement
        const user_password = document.querySelector('.pass_input') as HTMLInputElement

        const userLogin = {username:username.value,user_password:user_password.value}

        if(userLogin.username === '' || userLogin.user_password === ''){ 
            alert('Algum campo não foi preenchido!')
        }else{
            await handleLogin(userLogin.username,userLogin.user_password)
            const token = localStorage.getItem('token')
            
            if(token){ 
                history.push('mainpage')
            }
            else{
                console.log('token nulo!')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            }
        }
    }

    return (
        <div id="landing-page">                
            <div className="main">
                <Navbar/>
                <img src= {Aleatori_Logo} width="50" height="50" alt="LOGINHO" id="loginho"/>
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
                <a className="btn_go" role="button" onClick={validate_login_by_PF}> 
                    Sign In!
                </a>
            </div>
        </div>
    );
}   

export default Login; 