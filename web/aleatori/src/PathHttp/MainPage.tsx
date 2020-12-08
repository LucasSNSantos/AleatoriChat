import React, { ChangeEvent } from 'react';
import '../pages/MainPage.css';
import NavBar from '../Components/NavBar';
import Tag from '../Components/Tags';
import Room from '../Components/Box_Sala';
import api from '../api/api';
import TagClass from '../../../../backend/src/Models/tags';
import { useEffect } from 'react';
import { useState } from 'react';

function MainPage(){
    const [tags, setTags] = useState<TagClass[]>([]);

    useEffect(()=>{
        api.get('tags',{
            headers:{
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDczOTE1NDMsImV4cCI6MTYwNzQ3Nzk0M30.Bdtv_3bChLj0zZkV8sCY-s02_VGKBc5NRlcpIknXVHw'
            }
        }).catch(function (erro){
            if(erro.response){
                alert( erro.response.data);
            }
        }).then(response =>{
            if(!response){
                return;
            }
            setTags(response.data);
        });
    },[])

    //Not efficient at all!
    function Search_tag()
    {
        const input_S = document.querySelector('input[id="Search_tag"]') as HTMLInputElement;
        const tag_s = document.querySelector('aside[id="user_tags"]') as HTMLElement;
        
        input_S.addEventListener("keyup",function(event){
            if(event.keyCode === 13)
            {
                var aux = tag_s.children;
                console.log(aux)
                for(let i=0;i<tag_s.children.length;i++)
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
    function ShowCreate()
    {
        //@ts-ignore
        if(document.getElementById("myForm").style.display !== "flex")
        {
            //@ts-ignore
            document.getElementById("myForm").style.display = "flex";
        }else{
            //@ts-ignore
            document.getElementById("myForm").style.display = "none";
        }
         
    }
    function CloseCreate()
    {
        //@ts-ignore
        document.getElementById("myForm").style.display = "none";
    }
    async function CreateRoom(){
        // criando room {
        //     nome, 
        //     descriçao,
        //     assessibilidade,
        //     tags na tb tagsxsala, 
        // }
        console.log("a")
        // await api.post('imguploadUser',data,{
        //     headers:{
        //         'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDczOTE1NDMsImV4cCI6MTYwNzQ3Nzk0M30.Bdtv_3bChLj0zZkV8sCY-s02_VGKBc5NRlcpIknXVHw'
        //     }
        // }).catch(function (erro){
        //     if(erro.response){
        //         alert( erro.response.data);
        //     }
        // });
    }
    function showUpload()
    {
        //@ts-ignore
        document.getElementById("Formuload").style.display = "flex";
        const fileName = document.getElementById('file-name') as HTMLElement;
        const input = document.getElementById('fileinput')as HTMLInputElement;

        input.addEventListener('change', function(){
            fileName.textContent = input.value+"Sended!";
        });
    }
    function Close_upload(){
        //@ts-ignore
        document.getElementById("Formuload").style.display = "none";
    }
    async function Submit_img(event:ChangeEvent<HTMLInputElement>)
    {
        if(!event.target.files){
            return;
        }
        const data= new FormData();
        const images = Array.from(event.target.files);
        data.append("username",'lhimbo');
        images.forEach(element => {
            data.append("image",element);
        });        
        
        
        await api.post('imguploadUser',data,{
            headers:{
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDczOTE1NDMsImV4cCI6MTYwNzQ3Nzk0M30.Bdtv_3bChLj0zZkV8sCY-s02_VGKBc5NRlcpIknXVHw'
            }
        }).catch(function (erro){
            if(erro.response){
                alert( erro.response.data);
            }
        });
    }  
    
    return(
        <div className="Main-Page">
            <NavBar/>
            <div className="Main-Page-panel">
                <div className="Main-Page-Tags">
                    <input className="Search_tag" id="Search_tag" onKeyUp={Search_tag} placeholder="Search a tag here:"/>
                    <aside className="user_tags" id="user_tags">  
                        {tags.map(tag =>{
                            return(
                                <Tag text={tag.tag_name}/>
                            );
                        })}                  
                    </aside>
                </div>
                <div id="Formuload" className="Canvas-upload">
                    <form className="form-container-upload-files" encType="multipart/form-data">
                        <label htmlFor="fileinput" id="loadimg">Upload image</label>
                        <input onChange={Submit_img} id="fileinput" type='file' />
                        <span id='file-name'></span>
                        {/*<input type='text' placeholder="Image Link"/>
                        <button id="btn-upload-submit" onClick={()=>Submit_img()} className="btn-upload">Submit</button>*/}                        
                        <button id="btn-upload-close" onClick={()=>Close_upload()} className="btn-upload">Close</button>
                    </form>
                </div>
               <div className="Main-Page-User">
                    
                    <header className="user_panel">
                        <img alt="img_profile" onClick={()=>showUpload()} src="https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg"/>
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
                        <Room SalaName="Evangelion room you can (not) enter" path="/chat" Tags={["Anime","Evangelion"]}></Room>
                        <Room SalaName="CAts" path="/chat" Tags={["Pets","Cats"]}></Room>
                        <Room SalaName="MSP430" path="/chat" Tags={["Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits","Circuits"]}></Room>
                        <Room SalaName="JJBA" path="/chat" Tags={["Anime","JOJO"]}></Room>
                        <Room SalaName="Metal Gear Solid V" path="/chat" Tags={["Game"]}></Room>
                    </aside>                
                </div>               
               <div className="div-rooms-mangr">
                    <div className="btns_room_div">
                        <button id="aleatori" className="btn_rooms">Aleatori</button>
                        <button id="crt_room" onClick={()=>ShowCreate()} className="btn_rooms">Create Room</button>
                    </div>
                    <form id="myForm" className="form-container-crt-room">
                        <h1>Create Room</h1>
                            <label><b>Room Name</b></label>
                            <input type="text" required/>

                            <label><b>Tags</b></label>
                            <input type="text" required/>
                        
                            <button type="submit" onClick={()=>CreateRoom()} id="btn_create_room">Create</button>
                            <button type="button" onClick={()=>CloseCreate()} id="btn_cancel">Close</button>
                    </form>
               </div> 
            </div>
        </div>
    );
    
}

export default MainPage;
