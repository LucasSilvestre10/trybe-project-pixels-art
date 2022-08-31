window.onload = function reload() {
  if (localStorage.getItem('colorPalette')) {
    const color = JSON.parse(localStorage.getItem('colorPalette'));
    const box = document.querySelectorAll('.color');
    for (let index = 1; index < box.length; index += 1) {
      box[index].style.backgroundColor = `${color[index - 1]}`;
    }
  }
};
const button = document.querySelector('button');

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function buttonRandomColors() {
  const colors = [];
  console.log(colors);
  const box = document.querySelectorAll('.color');
  for (let index = 1; index < box.length; index += 1) {
    const color = generateColor();
    box[index].style.backgroundColor = `${color}`;
    colors.push(color);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colors));
}
button.onclick = buttonRandomColors;
