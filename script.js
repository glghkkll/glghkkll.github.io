// 改变 Nav 样式
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    const scrollOffset = nav.offsetHeight;
    if (window.scrollY > scrollOffset) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

// 逐字打印效果
const textEl = document.querySelector('#autotext');
const text = "欢迎来到我的个人网站";
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
const mode = document.querySelector('.mode');
const html = document.querySelector('html');
mode.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    html.classList.toggle('dark');
}

// 添加名言警句
const quoteEl = document.querySelector('#quote');
const autoTextEl = document.querySelector('.autotext');
getQuote();

async function getQuote() {
    try {
        const response = await fetch('https://v1.hitokoto.cn?c=d&c=k');
        const data = await response.json();
        const quote = `${ data.hitokoto } —— ${ data.from_who || '佚名'}`
        quoteEl.textContent = quote;
    } catch (error) {
        console.error('获取名言警句时出现错误:', error);
    }
}

autoTextEl.addEventListener('click', getQuote);