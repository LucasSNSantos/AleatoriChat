import {createContext,ReactNode} from 'react'
//import api from '../api/api'

// type User = {
//     user_id:string;
//     user_email:string;
//     username:string;
//     securityKey:string;
//     description:string;
// }

// type userValue = {
//     user:User;
//     hash:string;
// }

// export type Value = {
//     values:userValue;
//     handleLogin:(username:string,user_password:string) => void
// }
const AppContext = createContext({ isLogged:false })

type Props = {
    children:ReactNode;
}


// function ComponentContext({children}:Props){
   
// }

export default AppContext;

