"use strict";

// Loader
function loader() {
  document.querySelector('.loader').style.display = 'none';
} // notice 1000 = 1 seconds
// so 2000 = 2 seconds


function fadeOut() {
  setInterval(loader, 2000);
}

window.onload = fadeOut; // Scroll Reveal Animation

var sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 500,
  reset: true
});
sr.reveal('footer');
sr.reveal('.image,.title,.text,.paskibra', {
  origin: 'left'
});
sr.reveal('.about_data,.about_img,.links,.sidebar', {
  origin: 'right'
});
sr.reveal('.title,.date,.maps', {
  interval: 100,
  duration: 1000
});