// 改变 Nav 样式
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// 点击 nav 高亮显示
const aList = document.querySelectorAll('.nav li a')
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

// 逐字打印效果
const textEl = document.querySelector('#autotext')
const text = "欢迎来到我的个人网站"
let idx = 1
writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        return
    }
    setTimeout(() => {
        writeText()
    }, 300);

}