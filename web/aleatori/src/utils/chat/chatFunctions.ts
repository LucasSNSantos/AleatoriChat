
export default class Chatfunc{
  sendMessage(message:string){
    const div = document.createElement('div')
    div.classList.add('user_message')

    const p = document.createElement('p')
    p.classList.add('meta')
    p.innerText = message
    p.innerHTML = `<span>${message}<span/>`
    div.appendChild(p)

    const msg = document.createElement('p')
    msg.classList.add('text')
    msg.innerText = message

      //document.querySelector('.chat_messages').appendChild(div)
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
