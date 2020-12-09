import { throws } from 'assert'
import { AxiosResponse } from 'axios'
import React,{createContext, ReactNode, useState,useEffect} from 'react'
import api from '../api/api'
import {LoadingComponent} from '../PathHttp/loading'

interface User{
    username:string;
    user_id:number;
    user_email:string;
    securitykey:string;
    description:string;
    img_src:string;
}

interface apiResponse{
    isLogged:boolean;
    user:User | null;
    //token:string | null;
    loading:boolean;
    handleLogin(username:string,user_password:string):Promise<void>
}

interface props{
    children:ReactNode;
}

const loginContext = createContext<apiResponse>({} as apiResponse)

export function LoginProvider({children}:props){
    const [user,setUser] = useState<User|null>(null)
    const [token,setToken] = useState<string|null>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const [isLogged,setLogged] = useState<boolean>(false)

    useEffect(()=>{
        (async()=>{
            const storagedHash = await localStorage.getItem('token')
            const storagedUser = await localStorage.getItem('user')

            if(storagedHash && storagedUser){
                setUser(JSON.parse(storagedUser!))
                setLogged(true)
                setLoading(false)
            }
        })()
    },[])

    async function handleLogin(username:string,user_password:string){

            const {data,status}:AxiosResponse = await api.post('login',{username,user_password})

            if(!data) throw new Error('Usuario ou senha incorretos')

            setUser(data?.user)
            await localStorage.setItem('token',data?.hash)
            await localStorage.setItem('user',JSON.stringify(data?.user))
            api.defaults.headers.token = data.hash
    }


    return (
        <loginContext.Provider value={{user:user,isLogged:!!user,loading:loading,handleLogin}}>
            {children}
        </loginContext.Provider>
    )
}

export default loginContext;