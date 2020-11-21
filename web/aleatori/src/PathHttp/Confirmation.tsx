import React from 'react'
import '../pages/global.css'
import '../pages/confirmation.css'


interface User
{
    username:string;
    user_password:string;
    user_email:string;
    user_id:number;
    securityKey:string;
    description:string;
}

function Confirmation(){

    //if(!data) return (<h5>Carregando</h5>)

    return(
     <h1 className="page-loading">LOADING</h1>
    );
}

export default Confirmation;