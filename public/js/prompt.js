const submitPrompt = async (event) => {
    event.preventDefault();

    const prompt_title = document.querySelector('#subTitle').value.trim();
    const prompt_text = document.querySelector('#subText').value.trim();
    console.log(prompt_title, prompt_text)

    if (prompt_title && prompt_text) {
        const response = await fetch('/api/blogposts/prompt', {
            method: 'POST',
            body: JSON.stringify({prompt_title, prompt_text}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('.promptForm').addEventListener('submit', submitPrompt );