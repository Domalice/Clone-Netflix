let button = document.getElementById("btn-question")
let menu = document.getElementById("question")
let img = document.getElementById("img-question")

function openClose() {

    if(menu.style.display == "none") {
        menu.style.display = "block"
        img.id = "img-question-rotate"
    } else {
        menu.style.display = "none"
        img.id = "img-question"
    }
}

button.addEventListener("click", openClose)