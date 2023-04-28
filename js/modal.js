export const Modal = { //estruturacao de dados modal com objeto literal
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

Modal.buttonClose.onclick = () => { // funcao para fechar com botao X
  Modal.close()
}