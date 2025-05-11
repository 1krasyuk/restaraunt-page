import { clearContent, contentDiv } from "../main.js";

import "../styles/menu.css";

// Render Menu
export function renderMenu() {
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
