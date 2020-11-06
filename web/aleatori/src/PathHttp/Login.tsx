import React from 'react'
import {Link} from 'react-router-dom'
import '../pages/global.css'
import '../pages/Login.css'
import react_logo from '../logo.svg'
import Navbar from '../Components/NavBar'

function Landing(){

    return (
        <div id="landing-page">
            <div className="main">
                <Navbar/>
                <img src={react_logo} width="50" height="50" />
                <form className="user_auth">
                    <p>User:</p>
                    <input className="user_input"></input>
                </form>
                <form className="pass_auth">
                    <p>Password:</p>
                    <input className="pass_input"></input>
                </form>
                <Link to="/Register">
                        <a className="register">
                               Sign-Up!
                        </a>
                </Link>
                <Link to="/MainPage">
                    <a className="btn_go"> 
                        Sign In!
                    </a>
                </Link>
            </div>
        </div>
    );
}


export default Landing; 