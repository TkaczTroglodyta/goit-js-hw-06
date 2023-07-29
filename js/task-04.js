// method one

// let counterValue = 0;

// const references = {
//   counter: document.querySelector('#value'),
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };

// function decrementClick() {
//   counterValue -= 1;
//   references.counter.textContent = counterValue;
// }

// function incrementClick() {
//   counterValue += 1;
//   references.counter.textContent = counterValue;
// }

// const decrement = references.decrementBtn.addEventListener('click', decrementClick);
// const increment = references.incrementBtn.addEventListener('click', incrementClick);

// method two

let counterValue = 0;

const refs = {
  counter: document.querySelector('#counter'),
  value: counter.querySelector('#value'),
  decrementBtn: counter.querySelector('[data-action="decrement"]'),
  incrementBtn: counter.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
