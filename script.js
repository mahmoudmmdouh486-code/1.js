const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemList.appendChild(li);
        itemInput.value = '';
    }
});

const colorBtn = document.getElementById('colorBtn');
const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

colorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

const toggleImageBtn = document.getElementById('toggleImageBtn');
const toggleImage = document.getElementById('toggleImage');
const images = [
    'images/me.jpg',
    'images/me3.jpg'
];
let currentImageIndex = 0;

toggleImageBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    toggleImage.src = images[currentImageIndex];
});

const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');
let count = 0;

decrementBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
});

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});
