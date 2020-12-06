import React from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';
import Tag from '../Components/Tags';
import Room from '../Components/Box_Sala';

function MainPage(){
    //Not efficient at all!
    function Search_tag()
    {
        const input_S = document.querySelector('input[id="Search_tag"]') as HTMLInputElement;
        const tag_s = document.querySelector('aside[id="user_tags"]') as HTMLElement;
        
        input_S.addEventListener("keyup",function(event){
            if(event.keyCode === 13)
            {
                var aux = tag_s.children;
                for(let i=0;i<tag_s.children.length -1;i++)
                {
                    var str = aux[i].innerHTML.toLowerCase();
                    if(str?.includes(input_S.value.toLowerCase()))
                    {
                        tag_s.insertBefore(aux[i],tag_s.firstChild)
                    }
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
                        <img src="https://z-p42-instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/19932828_1698273457134971_1666650248052736000_a.jpg?_nc_ad=z-m&_nc_ht=z-p42-instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=srz_TjeT37cAX9-k6Zf&tp=1&oh=1ef6f136159fb7aba7f38bcf4e0aa38b&oe=5FF6AE12">
                        </img>
                        <h4 className="vPerfil">
                            User
                        </h4>
                        <p>
                         Descriptionkjdawjkdkajwndkjawndkjawndkjawndkjanwdkjankjdnawkjdnkawdnkjawdnkjwd
                        </p>
                    </header>
               </div>
                <div className="Main-Page-Chat">
                    <aside className="user_chat">
                        <Room SalaName="Evangelion room you can (not) enter" path="/chat" Tags={["Anime","Evangelion"]}></Room>
                        <Room SalaName="CAts" path="/chat" Tags={["Pets","Cats"]}></Room>
                        <Room SalaName="MSP430" path="/chat" Tags={["Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits"]}></Room>
                        <Room SalaName="JJBA" path="/chat" Tags={["Anime","JOJO"]}></Room>
                        <Room SalaName="Metal Gear Solid V" path="/chat" Tags={["Game"]}></Room>
                        
                    </aside>                
                </div>                
            </div>
        </div>
    );
    
}

export default MainPage;
