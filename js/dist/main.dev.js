"use strict";

// Navbar
var navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu');
toggleMenu.addEventListener('click', function () {
  navMenu.classList.toggle('show_menu');
});
closeMenu.addEventListener('click', function () {
  navMenu.classList.remove('show_menu');
}); // Remove Menu

var navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); // Click on

  navMenu.classList.remove('show_menu');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
}); // Swiper

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true'
}); // Dark Mode

var body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
var getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
} // js code to toggle dark and light mode


modeToggle.addEventListener("click", function () {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark"); // js code to keep user selected mode even page refresh or file reopen

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
}); // Change Background Header

function scrollHeader() {
  var header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader); // Typing

var typed = new Typed(".typing", {
  strings: ["Selamat Datang Di SMK Pandu", "Kami siap Melayani Anda", "Dengan Sepenuh hati"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
}); // Scroll Indicator

window.addEventListener("scroll", function () {
  var indicatorBar = document.querySelector(".scroll-indicator-bar");
  var pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollValue = pageScroll / height * 100;
  indicatorBar.style.width = scrollValue + "%";
}); // Page

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  }
}); // Teacher

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    540: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
}); // Clock
// Switch clock format

var formatSwitchBtn = document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click", function () {
  formatSwitchBtn.classList.toggle("active");
  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
}); // Get current time

function clock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var period = "AM"; // Set Time Period (AM/PM)

  if (hours >= 12) {
    period = "PM";
  } // Set 12 Hours Clock Format


  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  } // Add 0 for values


  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000); // Get the date 

var today = new Date();
var dayNumber = today.getDate();
var year = today.getFullYear();
var dayName = today.toLocaleString("default", {
  weekday: "long"
});
var monthName = today.toLocaleString("default", {
  month: "short"
});
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year; // Dot menu toggle

var dotmenuBtn = document.querySelector(".dot-menu-btn");
var dotMenu = document.querySelector(".dot-menu");
dotmenuBtn.addEventListener("click", function () {
  dotMenu.classList.toggle("active");
});
document.addEventListener("click", function (e) {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
}); // Loader

function loader() {
  document.querySelector('.loader').style.display = 'none';
} // notice 1000 = 1 seconds
// so 2000 = 2 seconds


function fadeOut() {
  setInterval(loader, 2000);
}

window.onload = fadeOut; // Scroll

var toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}); // Scroll Reveal Animation

var sr = ScrollReveal({
  origin: 'left',
  duration: 2500,
  delay: 500,
  distance: '0.4px',
  reset: true
});
sr.reveal('.home_subtitle,.home_title,home_buttons');
sr.reveal('.home_social,.home_buttons,.teachers', {
  origin: 'bottom'
});
sr.reveal('.about_description,.about_details,.about_award,.features,footer,.home_images', {
  origin: 'right'
});
sr.reveal('.about_img,.about_description,.about_details,.about_award,.page,.clock', {
  origin: 'left'
});
sr.reveal('.about_subtitle,.about_title', {
  interval: 100,
  duration: 500
});