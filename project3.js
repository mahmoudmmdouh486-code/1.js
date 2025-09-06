const toggleImageBtn = document.getElementById('toggleImageBtn');
const toggleImage = document.getElementById('toggleImage');
const images = [
    'https://i.ibb.co/4fQZqZP/photo-1.jpg',
    'https://i.ibb.co/3m7vZ9v/photo-2.jpg'
];
let currentImageIndex = 0;

toggleImageBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    toggleImage.src = images[currentImageIndex];
});
