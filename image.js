// Slideshow images
const images = ["https://th.bing.com/th/id/OIP.W4vlzsdG2ysojDJczAw_xgHaHN?w=198&h=193&c=7&r=0&o=5&pid=1.7", "image2.jpg", "image3.jpg"];
let currentSlide = 0;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    document.getElementById("slideshow-container").style.backgroundImage = `url('${images[currentSlide]}')`;
}

setInterval(showNextSlide, 3000);

showNextSlide();

