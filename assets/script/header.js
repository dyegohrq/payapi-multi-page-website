const burger = document.getElementById('burger');
const navBar = document.getElementById('nav_bar')
const btnClose = document.getElementById('btn_close')
const body = document.querySelector('body')

burger.addEventListener('click', (e) => {
    e.preventDefault()

    navBar.classList.toggle('active')
    navBar.style.zIndex = '99'
})

btnClose.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

