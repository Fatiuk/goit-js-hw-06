const sizeControlInput = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

sizeControlInput.addEventListener('input', () => {
  textElement.style.fontSize = sizeControlInput.value + 'px';
});
