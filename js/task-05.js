const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', event => {
  nameOutput.textContent =
    nameInput.value.trim() === '' ? 'Anonymous' : event.currentTarget.value;
});
