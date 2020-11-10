import React from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';
import Tag from '../Components/Tags';

function MainPage(){
    return(
        <div className="Main-Page">
            <NavBar/>
            <div className="Main-Page-panel">
                <div className="Main-Page-Tags">
                    <aside className="user_tags">
                        <Tag text="Pets"></Tag>
                        <Tag text="Anime"></Tag>
                        <Tag text="Circuits"></Tag>
                        <Tag text="Game"></Tag>
                    </aside>
                </div>
               <div className="Main-Page-User">
                    <header className="user_panel">
                        <a className="vPerfil"></a>
                    User
                </header>
               </div>
                <div className="Main-Page-Chat">
                    <aside className="user_chat">
                        chats
                    </aside>                
                </div>                
            </div>
        </div>
        /*<div className="Main-Page">
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
        </div>*/
    );
}

export default MainPage;