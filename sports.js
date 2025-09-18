const menuOpenButton =  document.querySelector(".menu-button-open");
const menuCloseButton =  document.querySelector(".menu-button-close");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.add("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>{
    document.body.classList.remove("show-mobile-menu")
})

function scrollSlider(amount) {
    const slider = document.getElementById('slider');
    slider.scrollLeft += amount;
  }

 const revealFromLeft = {
  distance: "100px",
  origin: "left",
  duration: 1000,
};
 const revealFromRight = {
  distance: "100px",
  origin: "right",
  duration: 1000,
};
 const revealFromBottom = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".main h1", {
  ...revealFromLeft,
});
ScrollReveal().reveal(".main h2", {
  ...revealFromRight,
  delay: 500,
});
ScrollReveal().reveal(" .btn", {
  ...revealFromBottom,
  delay: 500,
});
ScrollReveal().reveal(".vehical-info", {
  ...revealFromLeft,
});
ScrollReveal().reveal(".acce", {
  ...revealFromRight,
  delay: 500,
});
ScrollReveal().reveal(" .acc .btn", {
  ...revealFromBottom,
  delay: 500,
});