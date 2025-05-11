import "./styles/default.css";

import { renderMenu } from "./sections/menu";
import { renderAbout } from "./sections/about";
import { renderContact } from "./sections/contacts";

// Get references to navigation buttons and main content container
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

export const contentDiv = document.getElementById("content");

// Clear content area
export function clearContent() {
  contentDiv.innerHTML = "";
}

// Event listeners for navigation buttons
menuButton.addEventListener("click", renderMenu);
aboutButton.addEventListener("click", renderAbout);
contactButton.addEventListener("click", renderContact);

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
