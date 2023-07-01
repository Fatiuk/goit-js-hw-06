const validationInput = document.getElementById('validation-input');
const validationDataLength = validationInput.getAttribute('data-length');

// validationInput.addEventListener('blur', () => {
//   if (validationInput.value.trim().length === Number(validationDataLength)) {
//     validationInput.classList.add('valid');
//     validationInput.classList.remove('invalid');
//   } else {
//     validationInput.classList.add('invalid');
//     validationInput.classList.remove('valid');
//   }
// });

validationInput.addEventListener('blur', validateInput);

function validateInput() {
  validationInput.value.trim().length === Number(validationDataLength)
    ? changeClass('valid', 'invalid')
    : changeClass('invalid', 'valid');
}

function changeClass(firstClass, secondClass) {
  validationInput.classList.add(firstClass);
  validationInput.classList.remove(secondClass);
}
