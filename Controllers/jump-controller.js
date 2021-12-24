var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 300);
}