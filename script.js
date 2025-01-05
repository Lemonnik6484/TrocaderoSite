window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('image-container');
        document.body.appendChild(newDiv);
    }
});