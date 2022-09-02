const button = document.querySelector('button');
const button2 = document.querySelector('clear');
let selectColor = 'black';

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function buttonRandomColors() {
  const colors = [];
  //console.log(colors);
  const box = document.querySelectorAll('.color');
  for (let index = 1; index < box.length; index += 1) {
    const color = generateColor();
    box[index].style.backgroundColor = `${color}`;
    colors.push(color);
  }
  const selectR = document.getElementsByClassName('selected');
  selectR[0].classList.remove('selected');
  const select = document.getElementsByClassName('black');
  select[0].classList.add('selected');
  localStorage.setItem('colorPalette', JSON.stringify(colors));
}
button.onclick = buttonRandomColors;

function reloadPalette() {
  if (localStorage.getItem('colorPalette')) {
    const color = JSON.parse(localStorage.getItem('colorPalette'));
    const box = document.querySelectorAll('.color');
    for (let index = 1; index < box.length; index += 1) {
      box[index].style.backgroundColor = `${color[index - 1]}`;
    }
  }
}

function reloadBoard() {
  if (localStorage.getItem('pixelBoard')) {
    const color = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = `${color[index]}`;
    }
  }
}
function whiteBoard() {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.classList.toggle('line');
    board.appendChild(line);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const box = document.createElement('div');
      box.classList.toggle('pixel');
      line.appendChild(box);
    }
  }
}

function selectedColor(event) {
  const name = event.target.classList;
  const style = event.target.style.backgroundColor;
  if (name.value.includes('selected')) {
    console.log('já selecionado!', selectColor);
  } else if (style) {
    const selectR = document.getElementsByClassName('selected');
    selectR[0].classList.remove('selected');
    const select = document.getElementsByClassName(name.value);
    select[0].classList.add('selected');
    selectColor = style;
  } else {
    const selectR = document.getElementsByClassName('selected');
    selectR[0].classList.remove('selected');
    const select = document.getElementsByClassName(name.value);
    select[0].classList.add('selected');
    const color = name[1];
    selectColor = color;
  }
}

function saveBoard() {
  const save = [];
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    save.push(pixel[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(save));
}

function paint(event) {
  const target = event.target;
  target.style.backgroundColor = `${selectColor}`;
  saveBoard();
}

function clearBoard() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

window.onload = function load() {
  whiteBoard();
  reloadPalette();
  reloadBoard();
};
