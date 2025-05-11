(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function O(){m();const e=document.createElement("div");e.innerHTML=`
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

  `,l.appendChild(e)}const R="/restaraunt-page/assets/slide-CktN6g87.jpg",f="/restaraunt-page/assets/slide2-C4c9Rihh.jpg",S="/restaraunt-page/assets/slide3-CpXXwo0w.jpg",C="/restaraunt-page/assets/slide4-k1CaxpQC.jpg";function I(){m();const e=document.createElement("div");e.innerHTML=`
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
              <img src="${R}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${f}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${S}" alt="YUMMS interior" />
            </div>
            <div class="carousel-item">
              <img src="${C}" alt="YUMMS interior" />
            </div>
          </div>
        </div>
      </div>
  `,l.appendChild(e),M()}function M(){const e=document.querySelector(".carousel"),r=Array.from(document.querySelectorAll(".carousel-item"));r.forEach(a=>{const c=a.cloneNode(!0);e.appendChild(c)}),document.querySelectorAll(".carousel-item");let t=0,n=!1,s=0,i=0,d=0,o;function v(){i=-t*100,e.style.transition="transform 0.5s ease-in-out",e.style.transform=`translateX(${i}%)`,setTimeout(()=>{t>=r.length&&(e.style.transition="none",t=0,i=0,e.style.transform="translateX(0%)",d=0)},500)}function L(){t++,v(),d=-t*100}function p(){o=setInterval(()=>{n||L()},3e3)}function u(a){n=!0,s=a.type.includes("touch")?a.touches[0].clientX:a.clientX,clearInterval(o),e.style.transition="none"}function E(a){if(!n)return;const h=(a.type.includes("touch")?a.touches[0].clientX:a.clientX)-s;i=d+h/e.offsetWidth*100,e.style.transform=`translateX(${i}%)`}function A(a){if(!n)return;n=!1,e.style.transition="transform 0.5s ease-in-out";const c=i-d;c<-20?t++:c>20&&t>0&&t--,v(),d=-t*100,p()}e.addEventListener("mousedown",u),e.addEventListener("mousemove",a=>{n&&E(a)}),window.addEventListener("mouseup",A),e.addEventListener("touchstart",u,{passive:!1}),e.addEventListener("touchmove",E,{passive:!1}),e.addEventListener("touchend",A),document.querySelectorAll(".carousel-item img").forEach(a=>{a.addEventListener("dragstart",c=>c.preventDefault())}),p()}document.addEventListener("DOMContentLoaded",M);function T(){m();const e=document.createElement("div");e.innerHTML=`
  <div class="info-container">
  <div class="info-header">
    <h2>YUMMS, Aviapark Mall, 4th floor, Mark Eat zone</h2>
  </div>
  
  <div class="info-schedule">
    <p>Mon-Thu: 10:00-22:00 &nbsp;&nbsp; Fri-Sat: 10:00-23:00</p>
  </div>
  
  <div class="info-actions">
    <img src="${C}" alt="YUMMS interior" />
  </div>
  
  <div class="info-contacts">
    <p>Email: <a href="mailto:yumms.moscow@gmail.com">yumms.moscow@gmail.com</a></p>
    <p>Instagram: <a href="https://instagram.com/yumms.moscow" target="_blank">@yumms.moscow</a></p>
  </div>
</div>
  `,l.appendChild(e)}const N=document.getElementById("menu"),P=document.getElementById("about"),g=document.getElementById("contact"),l=document.getElementById("content");function m(){l.innerHTML=""}N.addEventListener("click",O);P.addEventListener("click",I);g.addEventListener("click",T);I();
