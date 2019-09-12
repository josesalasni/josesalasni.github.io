



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



/* Sections click */

document.getElementById("projectsclick").onclick = function(e) {
  e.preventDefault();
  var offset = 00 // pixels for the clouds :)
  var duration = 800 // milliseconds
  var project = document.getElementById("projects");
  zenscroll.center( project, duration, offset );
}