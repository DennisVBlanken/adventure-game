
var Player = document.getElementById('Player')
var left = 0;
var up = 0;
function moveRight(){
	left = left + 20;
	if (left > 1350) {left = -170}
	Player.style.left = left + "px";
	console.log(left + "px");
}

function moveLeft(){
	left = left - 20;
	if (left < -170) {left = 1350}
	Player.style.left = left + "px";
	console.log(left + "px");
}

function moveDown(){
	up = up + 20;
	if (up > 650) {up = -250}
	Player.style.top = up + "px";
	console.log(up + "px");
}

function moveUp(){
	up = up - 20;
	if (up < -250) {up = 650}
	Player.style.top = up + "px";
	console.log(up + "px");
}

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 65: // A
        moveLeft();
        break;

        case 37: // Left Arrow
        moveLeft();
        break;

        case 87: // W
        moveUp();
        break;

        case 38: // Up Arrow
        moveUp();
        break;

        case 68: // D
        moveRight();
        break;

        case 39: // Right Arrow
        moveRight();
        break;

        case 83: // S
        moveDown();
        break;

        case 40: // Down Arrow
        moveDown();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};