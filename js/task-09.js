function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  switchColorBtn: document.querySelector('.change-color'),
  bodyBkg: document.querySelector('body'),
  colorName: document.querySelector('.color'),
};

const clickColorBtn = refs.switchColorBtn.addEventListener('click', () => {
  refs.bodyBkg.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = refs.bodyBkg.style.backgroundColor;
});
