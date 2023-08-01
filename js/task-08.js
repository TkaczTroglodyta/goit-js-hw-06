const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  alert('All fields filled in!');
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
