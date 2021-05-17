const blogPostHandler = async (event) => {
    event.preventDefault();
  
    const blog = document.querySelector('#blog-input').value.trim();
    const prompt_id = document.querySelector("#promptTitle").dataset.promptid;
    console.log(prompt_id);


    const response = await fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify({ blog, prompt_id }),
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
  