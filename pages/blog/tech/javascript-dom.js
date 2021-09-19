document.addEventListener('DOMContentLoaded', start)

function start () {
    let header = document.getElementById("header")
    document.getElementsByTagName('body')[0].addEventListener('click', (evt) => {header.innerText = "(" + evt.pageX + ", " + evt.pageY + ")"})
}