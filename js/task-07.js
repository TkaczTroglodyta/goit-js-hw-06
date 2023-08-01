const sizeControl = document.querySelector('#font-size-control');
const caption = document.querySelector('#text');

sizeControl.addEventListener('input', () => {
  caption.style.fontSize = `${sizeControl.value}px`;
});
