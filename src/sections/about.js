import { clearContent, contentDiv } from "../main.js";

import slide from "../assets/slide.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

import "../styles/about.css";

// Render About section
export function renderAbout() {
  clearContent();
  const aboutContent = document.createElement("div");
  aboutContent.innerHTML = `
    <div id="about" class="yumms-about">
        <div class="text-block">
          <h2>ABOUT YUMMS</h2>
          <p>The brand was founded in 2022.</p>
          <p>
            YUMMS combines a dessert bar and showroom concept. Here you can
            enjoy sweet bowls, milkshakes and ice cream.
          </p>
          <p>
            At the heart of our brand lies a rejection of predictable
            associations and a desire for something new and fresh.
          </p>
        </div>
        <div class="carousel-container">
          <div class="carousel">
            <div class="carousel-item">
              <img src="${slide}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${slide2}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${slide3}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${slide4}" alt="YUMMS interior" />
            </div>
          </div>
        </div>
      </div>
  `;
  contentDiv.appendChild(aboutContent);
  initCarousel();
}

// Carousel logic
function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const originalItems = Array.from(document.querySelectorAll(".carousel-item"));

  // Clone all slides and add to the end
  originalItems.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  let isDragging = false;
  let startPosX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let autoplayInterval;

  function updateCarousel() {
    currentTranslate = -currentIndex * 100;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${currentTranslate}%)`;

    // Бесконечный цикл
    setTimeout(() => {
      if (currentIndex >= originalItems.length) {
        carousel.style.transition = "none";
        currentIndex = 0;
        currentTranslate = 0;
        carousel.style.transform = `translateX(0%)`;
        prevTranslate = 0;
      }
    }, 500);
  }

  function goToNext() {
    currentIndex++;
    updateCarousel();
    prevTranslate = -currentIndex * 100;
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      if (!isDragging) goToNext();
    }, 3000);
  }

  function startDrag(e) {
    isDragging = true;
    startPosX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    clearInterval(autoplayInterval);
    carousel.style.transition = "none";
  }

  function drag(e) {
    if (!isDragging) return;
    const currentPosX = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;
    const diffX = currentPosX - startPosX;
    currentTranslate = prevTranslate + (diffX / carousel.offsetWidth) * 100;
    carousel.style.transform = `translateX(${currentTranslate}%)`;
  }

  function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.transition = "transform 0.5s ease-in-out";

    const movedBy = currentTranslate - prevTranslate;
    const threshold = 20;

    if (movedBy < -threshold) {
      currentIndex++;
    } else if (movedBy > threshold && currentIndex > 0) {
      currentIndex--;
    }

    updateCarousel();
    prevTranslate = -currentIndex * 100;
    startAutoplay();
  }

  // Mouse events
  carousel.addEventListener("mousedown", startDrag);
  carousel.addEventListener("mousemove", (e) => {
    if (isDragging) drag(e);
  });
  window.addEventListener("mouseup", endDrag);

  // Touch events
  carousel.addEventListener("touchstart", startDrag, { passive: false });
  carousel.addEventListener("touchmove", drag, { passive: false });
  carousel.addEventListener("touchend", endDrag);

  // Prevent image dragging inside carousel
  document.querySelectorAll(".carousel-item img").forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });

  startAutoplay();
}

document.addEventListener("DOMContentLoaded", initCarousel);
