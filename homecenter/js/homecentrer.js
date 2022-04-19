
const contenido = document.querySelector('.contenido')
let mostrarBot = document.getElementById('bot');
const ocultarButton = document.getElementById('buttom');
let salirBot = document.getElementById('salir');
let sendButtom = document.getElementById('enviar');



ocultarButton.addEventListener('click', buscar );

function buscar(){
    mostrarBot.classList.add("bot-visibleBot")
    mostrarBot.classList.remove("bot")
    ocultarButton.classList.add("buttom-verButtom")
    ocultarButton.classList.remove("buttom")
    contenido.classList.add('contenido-mostrar')
    contenido.classList.remove('contenido')
}

salirBot.addEventListener('click', );

function salir(){
    mostrarBot.classList.add("bot")
    mostrarBot.classList.remove("bot-visibleBot")
    ocultarButton.classList.add("buttom")
    ocultarButton.classList.remove("buttom-verButtom")
    contenido.classList.add('contenido')
    contenido.classList.remove('contenido-mostrar')
}
