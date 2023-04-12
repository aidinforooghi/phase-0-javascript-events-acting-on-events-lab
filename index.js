// Your code here
function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var currentPosition = parseInt(dodger.style.left) || 0;
    var newPosition = currentPosition - 10; // Move 10 pixels to the left
    dodger.style.left = newPosition + 'px';
}

function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var currentPosition = parseInt(dodger.style.left) || 0;
    var newPosition = currentPosition + 10; // Move 10 pixels to the right
    dodger.style.left = newPosition + 'px';
}