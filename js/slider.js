const slides = document.querySelectorAll(".slider figure");
let index = 0;
let intervalId = null;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function startSlider() {
    if (intervalId !== null) return; // already playing

    intervalId = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000); // change image every 3 sec
}

function stopSlider() {
    clearInterval(intervalId);
    intervalId = null;
}

// Buttons
document.getElementById("playBtn").addEventListener("click", startSlider);
document.getElementById("pauseBtn").addEventListener("click", stopSlider);

// Show first slide on page load
showSlide(index);
