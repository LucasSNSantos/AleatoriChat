import React from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';
import Tag from '../Components/Tags';
import Room from '../Components/Box_Sala';

function MainPage(){
    function Search_tag()
    {
        const input_S = document.querySelector('input[id="Search_tag"]') as HTMLInputElement;
        const tag_s = document.querySelector('aside[id="user_tags"]') as HTMLElement;
        
        input_S.addEventListener("keyup",function(event){
            if(event.keyCode === 13)
            {
                for(let i=0;i<tag_s.children.length;i++)
                {
                    var aux = tag_s.children.item(i);
                    alert(aux?.innerHTML);
                }
            }
        })
    }
    return(
        <div className="Main-Page">
            <NavBar/>
            <div className="Main-Page-panel">
                <div className="Main-Page-Tags">
                    <input className="Search_tag" id="Search_tag" onKeyUp={Search_tag} placeholder="Search a tag here:"/>
                    <aside className="user_tags" id="user_tags">                        
                        <Tag text="Pets"></Tag>
                        <Tag text="Anime"></Tag>
                        <Tag text="Circuits"></Tag>
                        <Tag text="Game"></Tag>
                    </aside>
                </div>
               <div className="Main-Page-User">
                    <header className="user_panel">
                        <h4 className="vPerfil">
                            User
                        </h4>
                        <p>
                            Description
                        </p>
                    </header>
               </div>
                <div className="Main-Page-Chat">
                    <aside className="user_chat">
                        <Room SalaName="Evangelion room you can (not) enter" Tags={["Anime","Evangelion"]}></Room>
                        <Room SalaName="CAts" Tags={["Pets","Cats"]}></Room>
                        <Room SalaName="MSP430" Tags={["Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits"]}></Room>
                        <Room SalaName="JJBA" Tags={["Anime","JOJO"]}></Room>
                        <Room SalaName="Metal Gear Solid V" Tags={["Game"]}></Room>
                        
                    </aside>                
                </div>                
            </div>
        </div>
    );
    
}

export default MainPage;
