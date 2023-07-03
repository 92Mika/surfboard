/*const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");*/
let burger = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('.body');

let links = document.querySelectorAll('overlays.menu__link');

links.forEach(function(element) {
  element.addEventListener('click' ,toggleMenu);
}
)

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click', toggleMenu);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function myFunction() {
    document.getElementById("myParameters").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.pmtrsbtn')) {
        var functions = document.getElementsByClassName("parametres__content");
        var i;
        for (i = 0; i < functions.length; i++) {
            var openFunction = functions[i];
            if(openFunction.classList.contains('show')) {
                openFunction.classList.remove('show');
            }
        }
    }
}
