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

window.addEventListener('scroll', scrollHeader); // Scroll Indicator

window.addEventListener("scroll", function () {
  var indicatorBar = document.querySelector(".scroll-indicator-bar");
  var pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollValue = pageScroll / height * 100;
  indicatorBar.style.width = scrollValue + "%";
});