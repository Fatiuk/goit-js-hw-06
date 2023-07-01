const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
