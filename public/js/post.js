const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#exampleInputEmail1').value.trim();

    // Send the e-mail and password to the server
    fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': 'application/json' },
    });
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  