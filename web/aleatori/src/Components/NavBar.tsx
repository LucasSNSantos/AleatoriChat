import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';



function NavBar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                        <h1 id="NavBar-Header">
                            Aleatori Chat
                            <span></span>
                            <span></span>
                        </h1>
                </div>
            </nav>
        </>
    );
}

export default NavBar;