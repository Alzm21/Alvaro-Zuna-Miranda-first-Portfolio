/* const btnDark = document.getElementById('btnDark')
const dlIcon = document.getElementById('dlIcon')


function update_dlIcon() {
  if (document.body.classList.contains('dark')){
    dlIcon.src = 'assets/img/sun-solid-24.png'
  } else {
    dlIcon.src = 'assets/img/moon-solid-24.png'
  }
}

update_dlIcon()

btnDark.onclick = function(){
  document.body.classList.toggle('dark')
  update_dlIcon()
} */

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

  /* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Frontend', 'Backend', 'FullStack'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})