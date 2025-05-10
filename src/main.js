import "./styles/default.css";
import "./styles/about.css";
import "./styles/menu.css";
import "./styles/contacts.css";
import slide from "./assets/slide.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";

// Get references to navigation buttons and main content container
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");
const contentDiv = document.getElementById("content");

// Clear content area
function clearContent() {
  contentDiv.innerHTML = "";
}

// Render Menu
function renderMenu() {
  clearContent();
  const menuContent = document.createElement("div");
  menuContent.innerHTML = `
  <svg width="0" height="0" style="position: absolute">
  <defs>
    <clipPath id="myBlobShape" clipPathUnits="objectBoundingBox">
      <path
        d="M 0.05,0.5 C 0.05,0.2 0.2,0.05 0.5,0.1 S 0.95,0.25 0.95,0.5 C 0.95,0.75 0.8,0.95 0.5,0.9 S 0.05,0.8 0.05,0.5 Z"
      />
    </clipPath>
  </defs>
</svg>

<div class="menu-container">
  <div class="menu-card-container">
    <div class="menu-title-section">
      <h3> COFFEE</h3>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">RASPBERRY LATTE</span>
        <span class="item-price">$5.50</span>
      </div>
      <div class="item-description">RASPBERRY / MILK / ESPRESSO</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">MANGO LEMONGRASS LATTE</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">
        MANGO / LEMONGRASS / MILK / ESPRESSO
      </div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">PUMPKIN GOLDEN RAF</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">PUMPKIN / MILK / ESPRESSO</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">GLACÉ BY YUMMS</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">CHOCOLATE / ICE CREAM / ESPRESSO</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">BERRY AMERICANO</span>
        <span class="item-price">$4.80</span>
      </div>
      <div class="item-description">BLUEBERRY / YUZU / ESPRESSO</div>
    </div>
  </div>

  <div class="menu-card-container">
    <div class="menu-title-section">
      <h3>HOT BUBBLE TEA</h3>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">MILKY MANGO</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">MANGO / MILK / TAPIOCA / TARO / INOKA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">BUBBLE KISS</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">BUBBLE GUM / MILK / TAPIOCA / TARO / INOKA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">TARO</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">TARO / CARAMELIZED MILK / TAPIOCA / TARO / INOKA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">COFFEE CHOCO MILK</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">CHOCOLATE / MILK / TAPIOCA / ESPRESSO / TARO / INOKA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">STRAWBERRY CREAM</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">STRAWBERRY / MILK / TAPIOCA / TARO / INOKA</div>
    </div>
  </div>

  <div class="menu-card-container">
    <div class="menu-title-section">
      <h3>SPECIAL</h3>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">CINNAMON HONEY MILK</span>
        <span class="item-price">$4.80</span>
      </div>
      <div class="item-description">HONEY / MILK / CINNAMON / EARL GREY TEA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">SPICY MATCHA</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">SPICY HONEY / COCONUT MILK / MATCHA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">PISTACHIO MATCHA</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">PISTACHIO ICE CREAM / MILK / CARAMEL / MATCHA</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">CHERRY HOT CHOCOLATE</span>
        <span class="item-price">$5.50</span>
      </div>
      <div class="item-description">CHERRY / HONEY / COCOA</div>
    </div>
  
    <!-- Additional Item 1 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">GOLDEN TURMERIC LATTE</span>
        <span class="item-price">$5.80</span>
      </div>
      <div class="item-description">TURMERIC / HONEY / COCONUT MILK / BLACK PEPPER</div>
    </div>
  
    <!-- Additional Item 2 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">SALTED CARAMEL APPLE TEA</span>
        <span class="item-price">$5.20</span>
      </div>
      <div class="item-description">APPLE / CARAMEL / SEA SALT / BLACK TEA</div>
    </div>
  </div>
</div>
<div class="menu-container">


  <div class="menu-card-container">
    <div class="menu-title-section">
      <h3>LEMONADES</h3>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">WATERMELON</span>
        <span class="item-price">$6.20</span>
      </div>
      <div class="item-description">PINEAPPLE / MINT</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">ICE ALOE</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">PEACH / LEMON BALM</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">MILKY CORN</span>
        <span class="item-price">$6.80</span>
      </div>
      <div class="item-description">VANILLA / CINNAMON / LIME</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">YUZU COCONUT</span>
        <span class="item-price">$5.50</span>
      </div>
      <div class="item-description">YUZU / COCONUT WATER / WHITE GRAPES</div>
    </div>
  
    <!-- Additional Item 1 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">GINGER LIME FIZZ</span>
        <span class="item-price">$6.50</span>
      </div>
      <div class="item-description">FRESH GINGER / LIME / SPARKLING WATER / HONEY</div>
    </div>
  
    <!-- Additional Item 2 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">CUCUMBER MINT</span>
        <span class="item-price">$6.00</span>
      </div>
      <div class="item-description">CUCUMBER / FRESH MINT / LIME JUICE / SODA</div>
    </div>
  </div>

  <div class="menu-card-container">
    <div class="menu-title-section">
      <h3>CIDER</h3>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">BLUEBERRY+ROSEMARY</span>
        <span class="item-price">$5.50</span>
      </div>
      <div class="item-description">LEMONGRASS INFUSED</div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">LYCHEE</span>
        <span class="item-price">$5.50</span>
      </div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">CHERRY+HIBISCUS</span>
        <span class="item-price">$5.50</span>
      </div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">STRAWBERRY+VANILLA</span>
        <span class="item-price">$5.50</span>
      </div>
    </div>
  
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">PEACH</span>
        <span class="item-price">$5.50</span>
      </div>
    </div>
  
    <!-- Additional Item 1 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">APPLE+GINGER</span>
        <span class="item-price">$6.00</span>
      </div>
      <div class="item-description">WITH FRESH GINGER AND CINNAMON</div>
    </div>
  
    <!-- Additional Item 2 -->
    <div class="menu-card-item">
      <div class="item-header">
        <span class="item-name">BLACKCURRANT+THYME</span>
        <span class="item-price">$6.00</span>
      </div>
      <div class="item-description">HERBAL INFUSED CIDER</div>
    </div>
  </div>
  </div>
 </div>

  `;
  contentDiv.appendChild(menuContent);
}

// Render About section
function renderAbout() {
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

// Render Contact section
function renderContact() {
  clearContent();
  const contactContent = document.createElement("div");
  contactContent.innerHTML = `
  <div class="info-container">
  <div class="info-header">
    <h2>YUMMS, Aviapark Mall, 4th floor, Mark Eat zone</h2>
  </div>
  
  <div class="info-schedule">
    <p>Mon-Thu: 10:00-22:00 &nbsp;&nbsp; Fri-Sat: 10:00-23:00</p>
  </div>
  
  <div class="info-actions">
    <img src="${slide4}" alt="YUMMS interior" />
  </div>
  
  <div class="info-contacts">
    <p>Email: <a href="mailto:yumms.moscow@gmail.com">yumms.moscow@gmail.com</a></p>
    <p>Instagram: <a href="https://instagram.com/yumms.moscow" target="_blank">@yumms.moscow</a></p>
  </div>
</div>
  `;
  contentDiv.appendChild(contactContent);
}

// Event listeners for navigation buttons
menuButton.addEventListener("click", renderMenu);
aboutButton.addEventListener("click", renderAbout);
contactButton.addEventListener("click", renderContact);

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

// Render default content
renderAbout();
// Optionally show default content
// function loadDefaultContent() {
//   clearContent();
//   const defaultContent = document.createElement('div');
//   defaultContent.innerHTML = `...`;
//   contentDiv.appendChild(defaultContent);
// }
// loadDefaultContent();
