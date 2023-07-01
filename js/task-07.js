const sizeControlInput = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

const initialFontSize = sizeControlInput.value + 'px';
textElement.style.fontSize = initialFontSize;

const resizeFontForInput = event => {
  textElement.style.fontSize = event.target.value + 'px';
};

sizeControlInput.addEventListener('input', resizeFontForInput);
