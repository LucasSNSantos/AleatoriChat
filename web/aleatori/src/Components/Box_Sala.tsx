import React from 'react';
//import Box_sala from './Box_sala.css';
import Tag from './Tags';
import './Box_Sala.css';
import { ReactChild } from 'react';

type props = {
    SalaName:string
    path:string
    Tags:string[]
}
function Room({SalaName,Tags,path}:props)
{
    
    function ParseTag(){
            var elements:ReactChild[] = [];
            Tags.forEach(tag => {
                elements.push(<Tag text={tag}/>)
            });
            return(<div className="aux_element">{elements}</div>);
        };
    return(
        <div className="Box_sala_table" id="Box_sala_table">
            <a href={path}> 
                <h2 className="Sala_name">{SalaName}</h2>
            </a>
           
            <div className="Tags">
                {ParseTag()}
            </div>
           
        </div>
    );
    
}
export default Room;