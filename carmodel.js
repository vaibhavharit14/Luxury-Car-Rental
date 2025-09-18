window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const menuOpenButton = document.querySelector(".menu-button-open");
const menuCloseButton = document.querySelector(".menu-button-close");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});
function scrollSlider(amount) {
  const slider = document.getElementById("slider");
  slider.scrollLeft += amount;
}
const revealFromBottom = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".brand-item img", {
  ...revealFromBottom,
  delay: 500,
});
ScrollReveal().reveal(".title", {
  ...revealFromBottom,
  delay: 500,
});
