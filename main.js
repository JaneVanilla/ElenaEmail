var menu = document.querySelector(".page-nav__list");
var humburgerBtn = document.querySelector(".page-nav__humburger");
var closeHumburger = document.querySelector(".page-nav__close");

humburgerBtn.addEventListener("click", function(event1) {
     event1.preventDefault();
     menu.classList.add("page-nav__show");
     closeHumburger.classList.add("page-nav__show");
     humburgerBtn.classList.add("page-nav__closeBtn");
});

closeHumburger.addEventListener("click", function(event1) {
     event1.preventDefault();
     menu.classList.remove("page-nav__show");
     closeHumburger.classList.remove("page-nav__show");
      humburgerBtn.classList.remove("page-nav__closeBtn");
});