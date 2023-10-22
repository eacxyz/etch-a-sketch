const container = document.querySelector('.container');

function createGrid(perSide) {
	const width = 640 / perSide;
	for (let i = 0; i < perSide * perSide; i++) {
		const square = document.createElement('div');
		square.className = 'square';
		square.style.minWidth = width + 'px';
		square.style.height = width + 'px';
		container.appendChild(square);
	}

	const squares = document.querySelectorAll('.square');
	squares.forEach(square => square.addEventListener('mouseenter', function(e) {
		e.target.style.backgroundColor = 'blue';
	}));
}

function clearGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function newGrid() {
	let n = prompt('How many squares per side?');
	while (n > 100) {
		n = prompt('Maximum of 100, enter new number:')
	}
	while (n < 0) {
		n = prompt('ERROR: negative squares not possible');
	}
	clearGrid();
	createGrid(n);
}

createGrid(16);