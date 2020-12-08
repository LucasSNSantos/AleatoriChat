import React,{useContext} from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';
import Tag from '../Components/Tags';
import Room from '../Components/Box_Sala';
import loginContext from '../context/loginContext'

function MainPage(){
    const {user} = useContext(loginContext)

    console.log(user?.username)
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
                        <Room SalaName="Evangelion" Tags={["Anime","Evangelion"]}></Room>
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
