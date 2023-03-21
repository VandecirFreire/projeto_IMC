// Variáveis
const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

// 2 maneiras de criar e atribuir função a um evento
// form.onsubmit = function() {}
form.onsubmit = (event) => { // funcao usada para que nao recarregue a pagina
  event.preventDefault()

  const peso = inputPeso.value
  const altura = inputAltura.value

  const result = IMC(peso, altura)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => { // funcao para fechar com botao X
  modalWrapper.classList.remove('open')
}

function IMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}

