
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.right === "0%") {
    menu.style.right = "-50%";
  } else {
    menu.style.right = "0%";
  }
}

document.querySelectorAll('.carousel').forEach(function(carousel) {
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  let currentIndex = 0;

  // Create dots
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update dots
    dotsContainer.querySelectorAll('span').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // Enable scroll via swipe / touch
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 30) {
  // Left swipe → previous image
  currentIndex = (currentIndex - 1 + images.length) % images.length;
} else if (startX - endX > 30) {
  // Right swipe → next image
  currentIndex = (currentIndex + 1) % images.length;
}

updateCarousel();
});

updateCarousel();
});