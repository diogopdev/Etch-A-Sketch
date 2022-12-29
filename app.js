const grid = document.getElementById('grid');
const colorPicker = document.getElementById('color');
let times = 16;
let color = "black";


  
// Add an event listener for the input event
colorPicker.addEventListener('change', (event) => {
  // Get the value of the color picker
	color = event.target.value;
});

drawGrid();

document.getElementById("16").onclick = function () {times = 16; drawGrid()};
document.getElementById("32").onclick = function () {times = 32; drawGrid()};
document.getElementById("64").onclick = function () {times = 64; drawGrid()};
document.getElementById("128").onclick = function () {times = 128; drawGrid()};



function drawGrid() {

	grid.innerHTML = ''; //Deletes grid before creates a new one

	grid.style.setProperty("--grid-cols", times);
	grid.style.setProperty("--grid-rows", times);

	for (let i = 0; i < times * times; i++) {
		let cell = document.createElement('div');
		cell.addEventListener('mouseover', function() {
			this.style.backgroundColor = color;
			});
		cell.style = 'background-color: white; margin: 0px;';
		grid.appendChild(cell);
	}
}


