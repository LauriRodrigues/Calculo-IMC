export const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-message'),
  closeButton: document.querySelector('.close'),

  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  },
}

modal.closeButton.onclick = () => modal.close()

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    modal.close()
  }
}