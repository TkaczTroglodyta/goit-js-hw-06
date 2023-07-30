function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const switchColorBtn = document.querySelector('.change-color');
// const bodyBkg = document.querySelector('body');
// const colorName = document.querySelector('.color');
// const clickColorBtn = switchColorBtn.addEventListener('click', handleClick);

// function handleClick() {
//   bodyBkg.style.backgroundColor = getRandomHexColor();
//   colorName.textContent = bodyBkg.style.backgroundColor;
// }

// without button.switchColorBtn / still working

// const bodyBkg = document.querySelector('body');
// const colorName = document.querySelector('.color');
// const clickColorBtn = document.addEventListener('click', handleClick);

// function handleClick() {
//   bodyBkg.style.backgroundColor = getRandomHexColor();
//   colorName.textContent = bodyBkg.style.backgroundColor;
// }

// done with references object & arrow function (like in task #4)

const refs = {
  switchColorBtn: document.querySelector('.change-color'),
  bodyBkg: document.querySelector('body'),
  colorName: document.querySelector('.color'),
};

const clickColorBtn = refs.switchColorBtn.addEventListener('click', () => {
  refs.bodyBkg.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = refs.bodyBkg.style.backgroundColor;
});
