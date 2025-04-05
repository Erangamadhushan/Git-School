
ScrollReveal().reveal('.headline');
const sr = ScrollReveal({
  origin: 'bottom',
  duration: 400,
  delay: 200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: false
});
sr.reveal('.scroll-up', {
  origin: 'bottom',
  distance: '100px'
});