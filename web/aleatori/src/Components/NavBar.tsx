import React from 'react';
import './NavBar.css';

function NavBar(){
    window.onscroll = function() {sticky_func()};
    return(
       <div>
            <div className="navbar" id="nav_Bar">
                <div className="navbar-container">
                    <h1 id="NavBar-Header">
                        Aleatori Chat
                        <span></span>
                        <span></span>
                    </h1>
                </div>
            </div>
            <div className="container"></div>
        </div>
            
    );
    
    function sticky_func() {
        const navbar = document.getElementById("nav_Bar") as HTMLElement;
        const sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
}

export default NavBar;