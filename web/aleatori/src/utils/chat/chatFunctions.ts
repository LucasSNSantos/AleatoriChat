
function sendMessage(message){
    const div = document.createElement('div')
    div.classList.add('user_message')

    const p = document.createElement('p')
    p.classList.add('meta')
    p.innerText = message.time
    p.innerHTML = `<span>${message.user}<span/>`
    div.appendChild(p)

    const msg = document.createElement('p')
    msg.classList.add('text')
    msg.innerText = message.text

    document.querySelector('.chat_messages').appendChild(div)
}
function serverMessage(message){
    const div = document.createElement('div')
    div.classList.add('server_message')

    const p = document.createElement('p')
    p.classList.add('meta')
    p.innerText = message.time
    p.innerHTML = `<strong>${message.user}<strong/>`
    div.appendChild(p)

    const msg = document.createElement('p')
    msg.classList.add('text')
    msg.innerText = message.text

    document.querySelector('.chat_messages').appendChild(div)
}

module.exports = {
    sendMessage,
    serverMessage
};