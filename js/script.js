import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { IMC,  notNumber} from "./utils.js"

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

  const showAlertError = notNumber(peso) || notNumber(altura)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(peso, altura)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

// evento para fecha o alerta de erro quando comecar a digitar no input
inputPeso.oninput = () => AlertError.close()
inputAltura.oninput = () => AlertError.close()