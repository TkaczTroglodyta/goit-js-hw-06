function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const input = document.querySelector('[type=number]');

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     document.body.appendChild(box);
//     // dłuuuugo szukałem takiej metody :) nie było w konspekcie
//   }
// }

// function destroyBoxes() {
//   const boxes = document.querySelectorAll('div');
//   boxes.forEach(box => {
//     if (box.style.width !== '' && box.style.height !== '') {
//       box.remove();
//     }
//   });
// }

// createBtn.addEventListener('click', () => {
//   const amount = document.querySelector('input').value;
//   createBoxes(amount);
// });

// destroyBtn.addEventListener('click', () => {
//   destroyBoxes();
//   input.value = 0;
// });

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.createElement('div');
const input = document.querySelector('[type=number]');

document.body.appendChild(box);

createBtn.addEventListener('click', () => {
  const amount = document.querySelector('input').value;
  box.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    box.innerHTML += `<div style="width: ${30 + i * 10}px; height:${
      30 + i * 10
    }px; background-color:${getRandomHexColor()}"></div>`;
  }
});

destroyBtn.addEventListener('click', () => {
  box.innerHTML = '';
  input.value = 0;
});
