document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].classList.add('active');
  }, 5000);
});
