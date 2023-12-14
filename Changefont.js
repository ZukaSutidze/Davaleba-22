let text = document.querySelector("h1")

function changeFont(fontFamily) {
    document.body.style.fontFamily = fontFamily;
    text.textContent = fontFamily;
}
