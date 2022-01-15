//Signup Form
async function signupFormHandler(event) {
  event.preventDefault();

const username = document.querySelector('#username-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

if (username && password) {
  const response = await fetch('/api/users/users', {
    method: 'post',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  }); 
  // check the response status
  if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

//Login Form
async function loginFormHandler(event) {
  event.preventDefault();

  // const email = document.querySelector('#email-login').value.trim();
  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // if (email && password) {
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// document.querySelector('#form-login').addEventListener('submit', loginFormHandler);