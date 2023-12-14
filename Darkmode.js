const h1 = document.querySelector('h1')
const inp1 = document.querySelector('.secondline')
const inp11 = document.querySelector('.inp1')
const h2 = document.querySelector('h2')
const rect = document.querySelector('.rect')
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
const p4 = document.querySelector(".p4")
const p5 = document.querySelector(".p5")
const p6 = document.querySelector(".p6")
const p7 = document.querySelector("a")
const oval = document.querySelector('.whiteoval')
const moon = document.querySelector('.moon')
const divoval = document.querySelector('.oval')
const fp = document.querySelector(".fp")
const hide = document.querySelector('.hide')

function dark() {
    const back = document.body;
    back.classList.toggle('dark-mode')
    h1.classList.toggle('light')
    h2.classList.toggle('light')
    rect.classList.toggle('light')
    p1.classList.toggle('light')
    p2.classList.toggle('light')
    p3.classList.toggle('light')
    p4.classList.toggle('light')
    p5.classList.toggle('light')
    p6.classList.toggle('light')
    p7.classList.toggle('light')
    fp.classList.toggle('light')

    divoval.classList.toggle('btncolor')
    inp11.classList.toggle('light')
    moon.classList.toggle('kaxa')
    hide.classList.toggle('brgr')

    inp1.classList.toggle('inp1dark')
    inp11.classList.toggle("inp1dark")

    oval.classList.toggle('rame')

}

divoval.addEventListener('click', dark);
