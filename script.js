// Variáveis
const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

const Modal = { //estruturacao de dados modal com objeto literal
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {//funcao que vai ser executada quando chamada
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

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

Modal.buttonClose.onclick = () => { // funcao para fechar com botao X
  Modal.close()
}

function IMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}

