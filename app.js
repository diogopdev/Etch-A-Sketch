const grid = document.getElementById('grid');
let times = 16;

function changeTimes (times) {
	return times;
}


grid.style.setProperty("--grid-cols", times);
grid.style.setProperty("--grid-rows", times);

for (let i = 0; i < times * times; i++) {
	let cell = document.createElement('div');
	cell.addEventListener('mouseover', function() {
		this.style.backgroundColor = 'red';
	  });
	cell.style = ' margin: 0px;';
	grid.appendChild(cell);
	
}
