// Get all slider items and dots
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

// Set initial slide index and active dot index
let slideIndex = 0;
let activeDotIndex = 0;

// Add event listeners to arrow buttons
document.querySelector('.slider__arrow_prev').addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  }
  updateSlider();
});

document.querySelector('.slider__arrow_next').addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= sliderItems.length) {
    slideIndex = 0;
  }
  updateSlider();
});

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
  });
});

// Update slider function
function updateSlider() {
  // Remove active class from all slider items and dots
  sliderItems.forEach((item) => {
    item.classList.remove('slider__item_active');
  });
  dots.forEach((dot) => {
    dot.classList.remove('slider__dot_active');
  });

  // Add active class to current slider item and dot
  sliderItems[slideIndex].classList.add('slider__item_active');
  dots[slideIndex].classList.add('slider__dot_active');

  // Update active dot index
  activeDotIndex = slideIndex;
}

// Set initial active dot
dots[activeDotIndex].classList.add('slider__dot_active');
