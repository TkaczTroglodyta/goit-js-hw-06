const textInput = document.querySelector('#validation-input');

// classic if...else

// textInput.addEventListener('blur', () => {
//   if (textInput.value.length !== parseInt(textInput.getAttribute('data-length'))) {
//     textInput.classList.add('invalid');
//     textInput.classList.remove('valid');
//   } else {
//     textInput.classList.add('valid');
//     textInput.classList.remove('invalid');
//   }
// });

// with use of ternary operator

// textInput.addEventListener('blur', () => {
//   textInput.classList.toggle(
//     'invalid',
//     textInput.value.length !== parseInt(textInput.getAttribute('data-length'))
//   );
//   textInput.classList.toggle(
//     'valid',
//     textInput.value.length === parseInt(textInput.getAttribute('data-length'))
//   );
// });

// input border is green when 6 signs or more

textInput.addEventListener('blur', () => {
  textInput.value.length >= parseInt(textInput.getAttribute('data-length'))
    ? (textInput.classList.add('valid'), textInput.classList.remove('invalid'))
    : (textInput.classList.add('invalid'), textInput.classList.remove('valid'));
});

// funny click beside input field

// document.addEventListener('click', event => {
//   if (!textInput.contains(event.target)) {
//     textInput.value = '';
//   }
// });
