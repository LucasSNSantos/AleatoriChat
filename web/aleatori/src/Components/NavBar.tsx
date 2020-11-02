import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';



function NavBar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/MainPage" className="navbar-logo">
                        <h1 id="NavBar-Header">
                            Aleatori Chat
                            <span></span>
                            <span></span>
                        </h1>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;