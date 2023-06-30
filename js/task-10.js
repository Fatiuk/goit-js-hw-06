const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.appendChild(box);
  }
  console.log(Number(document.querySelector('input').value));
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

createButton.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});
destroyButton.addEventListener('click', destroyBoxes);
