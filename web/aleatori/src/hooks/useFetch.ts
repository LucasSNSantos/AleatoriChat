import useSWR from 'swr'
import api from '../api/api'

function useAxios<Data = any,Error = any>(url: string){
    const {data,error,mutate} = useSWR<Data,Error>(url,async url =>{
        const resp = await api.get(url)
        

        return resp.data;
    })

    //matute();

    return {data,error};
}

export default useAxios;