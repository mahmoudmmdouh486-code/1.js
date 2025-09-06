const colorBtn = document.getElementById('colorBtn');
const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

colorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
