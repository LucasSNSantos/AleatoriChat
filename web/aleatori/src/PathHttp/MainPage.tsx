import React from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';

function MainPage(){
    return(
        <div className="Main-Page">
            <NavBar></NavBar>           
            <ul className="feed">
                <li>
                    sala#1
                </li>
                <li>
                sala#2
                </li>
                <li>
                sala#3
                </li>
                <li>
                sala#4
                </li>
            </ul>
            <div className="tags-div">
                <table className="tags">
                    <tr>
                        #tag 01
                    </tr>
                    <tr>
                        #tag 02
                    </tr>
                    <tr>
                        #tag 03
                    </tr>
                </table>
            </div>
            <div className="user-div">
                <p>profile WIP!</p>
            </div>
        </div>
    );
}

export default MainPage;