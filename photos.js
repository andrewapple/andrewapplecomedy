var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



/* TRYING TO MAKE THE NEXT BUTTON WORK FROM HERE INSTEAD OF HTML 
let next = document.getElementsByClassName("demo");

function nextPic() {
  plusSlides(1);
}

next.addEventListener('keydown', plusSlides(1)); 

SECOND ATTEMPT

var biggie = document.getElementById("nexxt");

function nextPic() {
  if (key === 0xE04D) {
      plusSlides(1);
    }
  if (key === 0xE04D) {
      plusSlides(-1);
    }
  }
biggie.addEventListener('keydown', nextPic());



var butt = document.getElementsByClassName("next");
var pic = document.getElementByClassName("mySlidesZ");

const picBeGone = function() {
    if(document.getElementByClassName('next').clicked == true){
    pic.style.display = none;
    }
} */