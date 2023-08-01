const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  textInput.value.length >= parseInt(textInput.getAttribute('data-length'))
    ? (textInput.classList.add('valid'), textInput.classList.remove('invalid'))
    : (textInput.classList.add('invalid'), textInput.classList.remove('valid'));
});
