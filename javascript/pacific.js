
        const gallery =document.getElementById('gallery');
        const prevButton =document.getElementById('prev-button');
        const nextButton =document.getElementById('next-button');

        const images =['../images/image (15).png', '../images/image (16).png', '../images/image (17).png', '../images/image (18).png',
                        '../images/image (19).png', '../images/image (20).png', '../images/image (21).png', '../images/image (22).png',
                        '../images/image (23).png', '../images/image (24).png'];
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
