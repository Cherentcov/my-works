document.querySelector(".header__menu-burger").addEventListener("click", function() {
  document.querySelector(".nav__menu").classList.add("active");
  })
  document.querySelector(".nav__closed").addEventListener("click", function() {
  document.querySelector(".nav__menu").classList.remove("active");
  })