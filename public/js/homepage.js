
const signUpSubmit = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signUpEmail').value.trim();
  const password = document.querySelector('#signUpPassword').value.trim();

  if (email && password) {

      const response = await fetch('/api/users/create', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'application/json'},
      });
      console.log(response);
      if (response.ok) {
          document.location.replace('/profile');
      } else {
          alert(response.json.message);
      }
  }};

const loginSubmit = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#loginEmail').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();
  
  if (email && password) {
  
      const response = await fetch('api/users/login', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          document.location.replace('/profile');
      } else {
          alert(response.status);
      }
  }};

document.querySelector('.signUpForm').addEventListener('submit', signUpSubmit);
document.querySelector('.loginForm').addEventListener('submit', loginSubmit);
