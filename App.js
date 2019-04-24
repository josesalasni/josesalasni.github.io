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

 
function AboutMe () {
    closeNav();
    
    document.getElementById('about-me').scrollIntoView({
        behavior: 'smooth'
    });    
}

function Projects () {
    closeNav();
    
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function Technologies (){
    closeNav();

    document.getElementById('tech').scrollIntoView({
        behavior: 'smooth'
    });
}

/* Back to top */
function start() {
    document.getElementById('maincontent').scrollIntoView({
        behavior: 'smooth'
    });
}
  
function openNav() {
    document.body.style.overflow = "hidden";

    document.getElementById("myNav").style.height = "100%";
}

  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.body.style.overflow = "";
    document.body.style.overflowY = "scroll";
    document.getElementById("myNav").style.height = "0%";
} 