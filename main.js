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
    pixel.style.background = 'white';
    pixel.classList.add("pixels");
    board.appendChild(pixel);
  }
}

sizeBtn.addEventListener('click', changeSize);

random.addEventListener('click', () => {
  click = true;
})

color.addEventListener('click', () => {
  click = false;
})

function colorPixel(){
  label.style.color = color.value;

  if(click){
    this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
    this.style.background = color.value;
  }
}
