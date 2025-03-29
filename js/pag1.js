function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
function updateTimeSince() {
  const startTime = new Date("2022-05-23T19:00:00"); // May 23, 2022, 7:00 PM
  const now = new Date();
  let diff = Math.floor((now - startTime) / 1000); // Difference in seconds
  const years = Math.floor(diff / 31536000); // 60 * 60 * 24 *
  diff %= 31536000 * 60 * 60 * 24; // Remaining seconds after subtracting years
  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById(
    "timeSince"
  ).innerHTML = `${years} Ÿ ${days} Ď ${hours} Ĥ ${minutes} M ${seconds} Ş`;
}

setInterval(updateTimeSince, 1000); // Update every second

const gallery = document.getElementById("gallery");
const scrollStep = 210;
let scrollAmount = 0;

function scrollGallery(direction) {
  const maxScroll = gallery.scrollWidth - gallery.parentElement.clientWidth;
  scrollAmount += direction * scrollStep;
  if (scrollAmount < 0) {
    scrollAmount = 0;
  } else if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }
  gallery.style.transform = `translateX(${-scrollAmount}px)`;

}
// wraper 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}
