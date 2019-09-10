



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


// Scroll animations 

//window.onload = function() {
	new WOW().init();
//}