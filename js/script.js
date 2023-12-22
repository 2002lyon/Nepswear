"use strict";

const headerTop = document.querySelector(".header-top");
const parallexImg = document.querySelector("#parallexImg");
const logoBox = document.querySelector(".header-bottom-box");
const logoTop = document.querySelector(".header-logo");
const header = document.querySelector("header");
const storyContainer = document.querySelector(".story-container");
const headerMid = document.querySelector(".header-mid");

// SLick slider settings
$(document).ready(function () {
  $(".hero-slide").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
  });
});

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var currentScroll = window.scrollY || window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      // headerTop.classList.add("header-top-show");
      // logoBox.style.display = "none";
    } else {
      // headerTop.classList.remove("header-top-show");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    if (window.scrollY > 100) {
      // logoTop.style.visibility = "visible";
      header.style.position = "fixed";

      storyContainer.style.marginTop = "22rem";
      // headerMid.style.display = "none";
    }
    if (window.scrollY <= 100) {
      header.style.position = "relative";
      storyContainer.style.marginTop = "0rem";
      // headerMid.style.display = "block";
    } // For Mobile or negative scrolling
  },
  false
);

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  MainImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  MainImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  MainImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
  MainImg.src = smallImg[3].src;
};

function parallax() {
  window.onscroll = function () {
    var speed = 4.0;
    parallexImg.style.backgroundPosition =
      -window.scrollX / speed + "px " + -window.scrollY / speed + "px";
  };
}

parallax();
