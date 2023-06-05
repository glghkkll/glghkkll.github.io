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

// 改变明暗显示模式
const mode = document.querySelector('.mode')

mode.addEventListener('click', () => {
    const html = document.querySelector('html')

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
    } else {
        html.classList.add('dark')
    }
})