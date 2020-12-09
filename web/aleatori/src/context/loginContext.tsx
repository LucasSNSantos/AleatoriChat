import { AxiosResponse } from 'axios'
import React,{createContext, ReactNode, useState} from 'react'
import api from '../api/api'

interface User{
    username:string;
    user_id:number;
    user_email:string;
    securitykey:string;
    description:string;
    img_src:string;
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
    const [loading,setLoading] = useState<boolean>(false)


    async function handleLogin(username:string,user_password:string){
        try{
            setLoading(true)
            const {data}:AxiosResponse = await api.post('login',{username,user_password})
            if(!data) throw new Error('api retornou valor nulo!')

            setUser(data.user)
            setToken(data.hash)
        
            localStorage.setItem('token',token!)
            localStorage.setItem('user',user?.user_id.toString()!)
            
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    if(loading) return (<h1>LOADING....</h1>)

    return (
        <loginContext.Provider value={{user,token,handleLogin}}>
            {children}
        </loginContext.Provider>
    )
}

export default loginContext;