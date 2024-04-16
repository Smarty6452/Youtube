gsap.to(".main-txt", { duration: 2, delay:1, opacity: 1, y: -70 });
gsap.from(".extra-content", { duration: 1, opacity: 0, y: 50, delay: 1 });
gsap.to(".extraordinary-text",{ duration: 2, delay:1, opacity: 1, y: 70 });


const images = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}


setInterval(nextImage, 3000);

showImage(currentImageIndex);