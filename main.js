const sizeBtn = document.querySelector('.size-btn');
const color = document.querySelector('.color');
const label = document.querySelector('.label');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.Reset');
const squares = document.querySelectorAll('.pixels');
const random = document.querySelector('.random');
const btns = document.querySelectorAll('button');
const errorMsg = document.querySelector('.error');
let click = true;
let Color;


function changeSize() {
    const board = document.querySelector('.board');
    const input = document.querySelector('.input').value;
    let size = parseInt(input);

    if(input < 0 || input > 100){
      console.log('Invalid number of pixles!');
    
      errorMsg.style.display = 'flex';
      errorMsg.style.color = 'red';
      errorMsg.style.margin = '0 auto';
      errorMsg.style.fontSize = '0.8rem';
      board.style.display = 'none';
    }
    else{
      board.style.display = 'grid';
      errorMsg.style.display = 'none';
    }

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
    // pixel.classList.add("pixels");
    board.appendChild(pixel);
  }
}

sizeBtn.addEventListener('click', changeSize);

color.addEventListener('click', () => {
  Color = 'color';
  console.log(Color);
})

random.addEventListener('click', () => {
  Color = 'random';
  console.log(Color);
})

eraser.addEventListener('click', () => {
  Color = 'erase';
  console.log(Color);
})

function colorPixel(){
  label.style.color = color.value;
  if(click){
  if(Color === 'color'){
    this.style.background = color.value;
  }
  else if (Color === 'random'){
    this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else if (Color === 'erase'){
    this.style.background = 'white';
  }};
};

document.querySelector('.board').addEventListener('click', () => {
  click =! click;
  console.log(click);
});

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(function(){
      btn.classList.remove('clicked');
    }, 100);
  })
});