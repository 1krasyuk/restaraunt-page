import { clearContent, contentDiv } from "../main.js";

import slide4 from "../assets/slide4.jpg";

import "../styles/contacts.css";


// Render Contact section
export function renderContact() {
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
