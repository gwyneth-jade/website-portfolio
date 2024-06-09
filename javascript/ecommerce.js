
const gallery =document.getElementById('gallery');
const prevButton =document.getElementById('prev-button');
const nextButton =document.getElementById('next-button');

const images =['../images/image (12).png', '../images/image (3).png', '../images/image (4).png', '../images/image (5).png',
                '../images/image (7).png', '../images/image (8).png', '../images/image (9).png', '../images/image (10).png',
                '../images/image (11).png', '../images/image (13).png', '../images/image (14).png'];
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex =(currentIndex + 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex =(currentIndex + 1) % images.length;
    updateImage();
});

function updateImage(){
    const img = gallery.querySelector('#current-image');
    img.classList.add('fade-out')
    setTimeout(() => {
        img.src = images[currentIndex];
        img.alt = images[currentIndex];
        img.classList.remove('fade-out')
    }, 500);
}
