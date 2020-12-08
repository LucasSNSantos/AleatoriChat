import React,{createContext, ReactNode, useState} from 'react'
import api from '../api/api'

interface User{
    username:string;
    user_id:number;
    user_email:string;
    securitykey:string;
    description:string;
}

interface apiResponse{
    user:User | null;
    token:string | null;
    handleLogin(username:string,user_password:string):Promise<void>
}

interface props{
    children:ReactNode;
}

const loginContext = createContext<apiResponse>({} as apiResponse)

export function LoginProvider({children}:props){
    const [user,setUser] = useState<User|null>(null)
    const [token,setToken] = useState<string|null>(null)

    async function handleLogin(username:string,user_password:string){
        const {data} = await api.post('login',{username,user_password})

        setUser(data!.user)
        setToken(data!.hash)
    }

    return (
        <loginContext.Provider value={{user,token,handleLogin}}>
            {children}
        </loginContext.Provider>
    )
}

export default loginContext;