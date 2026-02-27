const imageGallery = [
    "https://plus.unsplash.com/premium_photo-1710064217185-8351ee74d564?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1590177137677-48a912983a35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwc2Nob29sfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1621542866840-061224c680c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
]

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();

nextButton.addEventListener('click', function(){
   currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});