



function setHeightCover () {
  document.getElementById("cover").style.height = window.innerHeight + "px" ;
}
//First time
setHeightCover();


// Attaching the event listener function to window's resize event
window.addEventListener("resize", setHeightCover);

//Siema carousel 

const mySiema = new Siema({
  selector: '.siema',
  duration: 1000,
  loop: true,
  easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
});


document.querySelector('.prev').addEventListener('click', function  (e) {
  e.preventDefault();
  mySiema.prev();
});

document.querySelector('.next').addEventListener('click', function (e) {
  e.preventDefault();
  mySiema.next();
}); 



// Scroll animations 

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  startEvent: 'DOMContentLoaded', // n

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  //mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

/* Sections click */

document.getElementById("projectsclick").onclick = function(e) {
  e.preventDefault();
  var offset = 00 // pixels for the clouds :)
  var duration = 800 // milliseconds
  var project = document.getElementById("projects");
  zenscroll.center( project, duration, offset );
}