import useSWR from 'swr'
import api from '../api/api'

function useAxios<Data = any,Error = any>(url: string){
    const {data,error} = useSWR<Data,Error>(url,async url =>{
        const resp = await api.get(url)
        

        return resp.data;
    })

    return {data,error};
}

export default useAxios;