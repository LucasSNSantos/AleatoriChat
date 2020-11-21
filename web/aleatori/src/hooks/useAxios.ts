import useSWR from 'swr'
import api from '../api/api'

export default function <Data = any,Error = any>(url: string){
     
    const {data,error} = useSWR<Data,Error>(url,async url =>{
         const response = await api.get('/users')

         return response.data
     })


     return {data,error}
 }