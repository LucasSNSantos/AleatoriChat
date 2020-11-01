class chat_user
{
    id_chat_user:number;
    fk_user_id:number;
    fk_chat_sala:number;
    is_moderator:boolean; 
}
//associative table userXchat_sala
export default chat_user;