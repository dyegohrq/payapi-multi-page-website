const burger = document.getElementById('burger');
const navBar = document.getElementById('nav_bar')
const btnClose = document.getElementById('btn_close')

burger.addEventListener('click', (e) => {
    e.preventDefault()

    navBar.classList.toggle('active')
})

btnClose.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

