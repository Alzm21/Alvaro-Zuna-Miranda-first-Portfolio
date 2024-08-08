import Typed from '../../node_modules/typed.js/dist/typed.module.js'

document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('#typing', {
    strings:["Hi! I'm Alvaro Zuna."],
    typeSpeed: 65,
    backSpeed: 0,
    backDelay: 1900,
    loop: true,
    cursorChar: '|'
  });
}) 

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

const btnOpen = document.querySelector('.btn_open')

const navMenu = document.querySelector('.nav_menu')

btnOpen.onclick = function () {
  navMenu.classList.toggle('show_menu')
}


const links = document.querySelectorAll('.nav_link')

for (const iterator of links) {
  iterator.addEventListener('click', function () {
    navMenu.classList.remove('show_menu')
  })
  
}

/* btnDark.onclick = function () {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      modeIcon.src = 'assets\img\moon-solid-24.png'
      } else {
        modeIcon.src = 'assets\img\sun-solid-24.png'
        }
  }
 */