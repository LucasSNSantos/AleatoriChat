import React from 'react'
import '../global.css'
import {FiCheck} from 'react-icons/fi'
import '../styles/Landing.css'
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
                <a className="btn_go"> 
                    Sign In!
                </a>
            </div>
        </div>
    );
}


export default Landing; 