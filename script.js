const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
	const square = document.createElement('div');
	square.className = 'square';
	container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseenter', function(e) {
	e.target.style.backgroundColor = 'blue';
}))