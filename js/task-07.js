const sizeControl = document.querySelector('#font-size-control');
const caption = document.querySelector('#text');

const initialFontSize = (Number(sizeControl.min) + Number(sizeControl.max)) / 2;
caption.style.fontSize = `${initialFontSize}px`;

sizeControl.addEventListener('input', () => {
  caption.style.fontSize = `${sizeControl.value}px`;
});
