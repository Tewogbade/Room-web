"use strict";
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const heroPicture = document.getElementById("header");
const tittle = document.getElementById("tittle");
const text = document.getElementById("text");

rightArrow.addEventListener("click", () => {
  heroPicture.style.backgroundImage = "url(/images/desktop-image-hero-2.jpg)";
  tittle.textContent = "We are avaialable all across the globe";
  text.textContent =
    "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally,we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ";
});
leftArrow.addEventListener("click", () => {
  heroPicture.style.backgroundImage = "url(/images/desktop-image-hero-3.jpg)";
  tittle.textContent = "Manufactured with the best materials";
  text.textContent =
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office";
});
