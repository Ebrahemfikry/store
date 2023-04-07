let liaction = document.querySelector("#liAction");
let ulaction = document.querySelector("#ulAction");


liaction.onclick = function() {
    ulaction.classList.toggle("opacity");
}