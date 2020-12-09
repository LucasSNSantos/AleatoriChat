
export default class Chatfunc{
  public sendMessage(message:string,chat:HTMLDivElement,autor:string){
    const div = document.createElement('div')
    div.classList.add('user_message')

    const user = document.createElement('p')
    user.classList.add('meta')
    user.innerText = autor
    user.innerHTML = `<span id="user_name">${autor+" :"}<span/>`
    div.appendChild(user)

    const p = document.createElement('p')
    p.classList.add('meta')
    p.innerText = message
    p.innerHTML = `<span>${message}<span/>`
    div.appendChild(p)

    const msg = document.createElement('p')
    msg.classList.add('text')
    msg.innerText = message
    console.log(chat)
   chat.appendChild(div)
  }

 serverMessage(message:string){
    const div = document.createElement('div')
    div.classList.add('server_message')

    const p = document.createElement('p')
    p.classList.add('meta')
    p.innerText = message
    p.innerHTML = `<strong>${message}<strong/>`
    div.appendChild(p)

    const msg = document.createElement('p')
    msg.classList.add('text')
    msg.innerText = message

    //document.querySelector('.chat_messages').appendChild(div)
  }
}
