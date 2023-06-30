const counter = document.getElementById('counter');
const decrementButton = counter.querySelector("[data-action='decrement']");
const incrementButton = counter.querySelector("[data-action='increment']");
const value = document.getElementById('value');

let counterValue = Number(value.textContent);

function decrement() {
  counterValue -= 1;
  return (value.textContent = counterValue);
}

function increment() {
  counterValue += 1;
  return (value.textContent = counterValue);
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
