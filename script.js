const button = document.querySelector('button');

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function buttonRandomColors() {
  const box = document.querySelectorAll('.color');
  for (let index = 1; index < box.length; index += 1) {
    const color = generateColor();
    box[index].style.backgroundColor = `${color}`;    
  }
}

button.onclick = buttonRandomColors;
