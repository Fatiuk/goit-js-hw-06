const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  if (amount >= Number(input.min) && amount <= Number(input.max)) {
    for (let i = 0; i < amount; i += Number(input.step)) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxes.appendChild(box);
    }
    console.log(Number(document.querySelector('input').value));
  } else
    return alert(
      'The number exceeds the limit or does not meet the conditions'
    );
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
};

createButton.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
