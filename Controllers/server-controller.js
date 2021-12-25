var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

gameStart = console.log('Game has started.');

var checkIfLoss = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        console.error('Player has died');
    }
}, 1);