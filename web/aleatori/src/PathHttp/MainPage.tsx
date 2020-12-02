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
                        <p className="vPerfil">
                            User
                        </p>
                        <p>
                            Description
                        </p>
                    </header>
               </div>
                <div className="Main-Page-Chat">
                    <aside className="user_chat">
                        chats
                    </aside>                
                </div>                
            </div>
        </div>
    );
}

export default MainPage;
