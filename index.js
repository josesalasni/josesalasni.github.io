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

function setHeightCover () {
  document.getElementById("cover").style.height = window.innerHeight + "px" ;
}

setHeightCover();
zenscroll.setup(null, 0);

document.getElementById("projectsclick").onclick = function(e) {
  e.preventDefault();
  var project = document.getElementById("projects");
  zenscroll.center(project);
}

document.getElementById("contactclick").onclick = function(e) {
  e.preventDefault();
  var contact = document.getElementById("contact-section");
  zenscroll.center(contact);
}

document.getElementById("home-scroll-down").onclick = function(e) {
  e.preventDefault();
  var about = document.getElementById("about-me");
  zenscroll.center(about);
}

document.getElementById("btn-send-mail").onclick = function (e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;
  var message = document.getElementById("body-msg").value;
  window.location.href = 'mailto:josesalasni@gmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
}