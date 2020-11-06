import React from 'react'
import '../pages/global.css'
import '../pages/confirmation.css'
import useFetch from '../hooks/useFetch'
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
    const {data} = useFetch<User[]>('users')

    if(!data) return (<h5>Carregando</h5>)

    return(
     <ul>
         {data.map(user =>(
             <li>
                 {user.username},<br></br>
                 {user.user_email},<br></br>
                 {user.user_id},<br></br>
                 {user.description}<br></br>
             </li>
         ))}
     </ul>
    );
}

export default Confirmation;