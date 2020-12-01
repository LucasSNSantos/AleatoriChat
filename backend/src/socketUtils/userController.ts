import db from '../Database/connection'
import onlineUser from '../Models/onlineUser'


export default{
    async joinUser(id,name,chat_id){
        const user:onlineUser = {id:id,name:name,chat_id:chat_id}
        
        try{
            await db('onlineUsers').insert(user)
        }catch(e){
            return null    
        }
        
        return user;
    },

    async getUserbyId(id){

        const users = await db('onlineUsers').where('id',id).select('*')
        const user:onlineUser = users[0]

        if(!user) return null;

        return user;
    },

    async deleteUserbyId (id) {
        try{
            await db('onlineUsers').where('id',id).delete()
        }catch(e){
            return null
        }

        return true
    }
}