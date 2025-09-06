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
