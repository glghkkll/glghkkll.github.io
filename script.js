const nav = document.querySelector('.nav')
const aList = document.querySelectorAll('.nav li a')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

aList.forEach(item => {
    item.addEventListener('click', () => {
        removeAllCurrent()
        item.classList.add('current')
    })
})

function removeAllCurrent() {
    aList.forEach(item => {
        item.classList.remove('current')
    })
}