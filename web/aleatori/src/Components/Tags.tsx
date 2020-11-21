import React from 'react';
import './Tag.css';

type props = {
    text:string
}

function Tag({text}:props){
    return(
        <div className="Tag-box">
            <a className="Tag-Text" href="/">
                {text}
            </a>
        </div>
    );
}

export default Tag;