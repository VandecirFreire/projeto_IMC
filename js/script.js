import { Modal } from './modal.js'

// Variáveis
const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

// 2 maneiras de criar e atribuir função a um evento
// form.onsubmit = function() {}
form.onsubmit = (event) => { // funcao usada para que nao recarregue a pagina
  event.preventDefault()

  const peso = inputPeso.value
  const altura = inputAltura.value

  const result = IMC(peso, altura)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}



function IMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}

