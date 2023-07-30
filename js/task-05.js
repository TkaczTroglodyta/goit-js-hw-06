const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  // classic if...else

  //   if (input.value) {
  //     output.textContent = input.value;
  //   } else {
  //     output.textContent = 'Anonymous';
  //   }

  // with use of ternary operator
  output.textContent = input.value ? input.value : 'Anonymous';
});
