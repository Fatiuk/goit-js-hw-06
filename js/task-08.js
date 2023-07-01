const loginForm = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const userData = { email: email.value, password: password.value };

  if (email.value === '' || password.value === '') {
    return alert('You must fill in all these fields for successful login!');
  }

  console.log(userData);

  event.currentTarget.reset();
};

loginForm.addEventListener('submit', handleSubmit);
