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
