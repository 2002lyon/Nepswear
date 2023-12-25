"use strict";

const headerTop = document.querySelector(".header-top");
const parallexImg = document.querySelector("#parallexImg");
const logoBox = document.querySelector(".header-bottom-box");
const logoTop = document.querySelector(".header-logo");
const header = document.querySelector("header");
const storyContainer = document.querySelector(".story-container");
const headerMid = document.querySelector(".header-mid");

// responsive navbar on scrolling down

let lastScrollTop = 0;
function updateHeaderOpacity() {
  var currentScroll = window.scrollY || window.pageYOffset;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.style.transition = "opacity 0.3s ease";
    header.style.opacity = "0";
  } else {
    header.style.transition = "opacity 0.3s ease";
    header.style.position = "fixed";
    header.style.opacity = "1";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// Initial call to start the animation loop
requestAnimationFrame(updateHeaderOpacity);

window.addEventListener("scroll", function () {
  requestAnimationFrame(updateHeaderOpacity);
});

$(document).ready(function () {
  $(".hero-slide").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
  });
});

// function parallax() {
//   window.onscroll = function () {
//     var speed = 4.0;
//     parallexImg.style.backgroundPosition =
//       -window.scrollX / speed + "px " + -window.scrollY / speed + "px";
//   };
// }

// parallax();
