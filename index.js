// Contact
var time = gsap.timeline()

time.from( ".nav-menu, .slider-link, .samsung-logo, span, p", {

y:-100,
duration:1,
delay:1,
opacity:0,
stagger:0.2

})

// Back to up
window.onscroll = function () {
   var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        topBtn = document.getElementById('topBtn');
      if (scrolled > 400 ) {
        topBtn.classList.add('visible');
      }
      else { topBtn.classList.remove('visible');}
}
