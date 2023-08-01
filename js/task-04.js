let counterValue = 0;

const refs = {
  counter: document.querySelector('#counter'),
  value: counter.querySelector('#value'),
  decrementBtn: counter.querySelector('[data-action="decrement"]'),
  incrementBtn: counter.querySelector('[data-action="increment"]'),
  spans: counter.querySelectorAll('span'),
};

refs.decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});

refs.spans.forEach(span => {
  span.style.width = '40px';
  span.style.display = 'inline-block';
  span.style.textAlign = 'center';
});
