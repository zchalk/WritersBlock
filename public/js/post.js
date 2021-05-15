const blogPostHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const blog = document.querySelector('#blog-input').value.trim();

    const response = await fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify({ blog }),
    headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert(response.statusText)
    }
  };
  
  document
    .querySelector('.blog-form')
    .addEventListener('submit', blogPostHandler);
  