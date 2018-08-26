window.onload = function() {
var box = document.getElementById('box');
var pox = 0;
var t = setInterval(move, 1);

function move() {
if (pox >= 150) {
	clearInterval()
} else {
	pox += 1
	box.style.left = pox + 'px';
	}
}
};
