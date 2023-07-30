const sizeControl = document.querySelector('#font-size-control');
const caption = document.querySelector('#text');

sizeControl.addEventListener('input', () => {
  caption.style.fontSize = `${sizeControl.value}px`;
});

// using getElementById and currentTarget / wasn't on the lessons

// const sizeControl = document.getElementById('font-size-control');
// const caption = document.getElementById('text');
// const slider = sizeControl.addEventListener('input', onSlide);

// function onSlide(event) {
//   caption.style.fontSize = event.currentTarget.value + 'px';
// }
