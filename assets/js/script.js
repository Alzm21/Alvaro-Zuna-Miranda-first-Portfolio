import Typed from '../../node_modules/typed.js/dist/typed.module.js'

/* document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('#typing', {
    strings:["Hi! I'm Alvaro."],
    typeSpeed: 65,
    backSpeed: 0,
    backDelay: 1900,
    loop: true,
    cursorChar: '|'
  });
})  */

document.getElementById('copyEmail').addEventListener('click', function(event){
  event.preventDefault()
  const email = 'jcazm92@gmail.com'
  navigator.clipboard.writeText(email).then( () => {
    showStatusMessage('Email copied to clipboard')
  }).catch(err => {
    console.error('Could not copy the text', err);    
  })
})
function showStatusMessage (message) {
  const statusMessage = document.getElementById('statusMessage')
  statusMessage.textContent = message
  statusMessage.classList.remove('hidden')

  setTimeout(() => {
    statusMessage.classList.add('hidden')
  }, 3000)
}

const btnOpen = document.querySelector('.nav_toggle_label')
const navMenu = document.querySelector('.nav_menu')

btnOpen.onclick = function () {
  navMenu.classList.toggle('show_menu')
}

const links = document.querySelectorAll('.menu_link')

for (const iterator of links) {
  iterator.addEventListener('click', function () {
    navMenu.classList.remove('show_menu')
  })
}
