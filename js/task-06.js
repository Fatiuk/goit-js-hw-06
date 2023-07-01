const validationInput = document.getElementById('validation-input');
const validationDataLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === Number(validationDataLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
