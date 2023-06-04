const sizeBtn = document.querySelector('.size-btn');
const color = document.querySelector('.color');
const label = document.querySelector('.label');
const reset = document.querySelector('.Reset');
const squares = document.querySelectorAll('.pixels');
const random = document.querySelector('.random');
let click;


function changeSize() {
    const board = document.querySelector('.board');
    const input = document.querySelector('.input').value;
    let size = parseInt(input);

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  board.innerHTML = "";

  reset.addEventListener('click', erase)

    function erase(){
        board.innerHTML = '';
    }

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement('div');
    pixel.addEventListener('mouseover', colorPixel);
    pixel.style.background = 'blue';
    pixel.classList.add("pixels");
    board.appendChild(pixel);
  }
}

sizeBtn.addEventListener('click', changeSize);

function colorPixel(){
  this.style.background = color.value
}
