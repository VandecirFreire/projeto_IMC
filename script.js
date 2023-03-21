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

  console.log(peso, altura)
}