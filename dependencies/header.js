document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById('adaptive-popup')
    let menuBtn = document.querySelector('.header__adaptive-menu-btn')
    let popupClose = document.querySelector('.adaptive-popup__close')

    menuBtn.addEventListener('click',function () {
        popup.classList.remove('adaptive-popup__hidden')
        document.body.classList.add('fixed-scroll')
    })
    popupClose.addEventListener('click',function () {
        popup.classList.add('adaptive-popup__hidden')
        document.body.classList.remove('fixed-scroll')
    })
});