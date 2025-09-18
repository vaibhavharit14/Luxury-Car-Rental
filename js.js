window.addEventListener("scroll",function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky",window.scrollY > 0);
        })
function call(option) {
  alert("Call on " + option + "");
}
function calll(option) {
  alert("Call on " + option + "");
}

function bookNow(option) {
  alert("You selected the " + option + " option. Booking in progress...");
}
const menuOpenButton =  document.querySelector(".menu-button-open");
const menuCloseButton =  document.querySelector(".menu-button-close");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.add("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>{
    document.body.classList.remove("show-mobile-menu")
})


const slider = document.querySelector('.slider');
const resize = document.querySelector('.slider-resize');
const handle = document.querySelector('.slider-handle');

slider.addEventListener('mousemove', (e) => {
  const bounds = slider.getBoundingClientRect();
  const x = e.clientX - bounds.left;
  const width = slider.offsetWidth;

  const percent = Math.max(0, Math.min(100, (x / width) * 100));
  resize.style.width = percent + '%';
  handle.style.left = percent + '%';
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Form Submitted Successfully!");
    });

  const revealFromBottom = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
 const revealFromLeft = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};
const revealFromRight = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};
ScrollReveal().reveal(".one h1 ", {
  ...revealFromBottom,
});
ScrollReveal().reveal(".one p ", {
  ...revealFromBottom,
});
ScrollReveal().reveal(".car h1", {
  ...revealFromLeft,
  delay : 400,
});
ScrollReveal().reveal(".container h1", {
  ...revealFromLeft,
})
ScrollReveal().reveal(".option-card", {
  ...revealFromBottom,
})
ScrollReveal().reveal(".option-card h2", {
  ...revealFromLeft,
  delay : 500,
})
ScrollReveal().reveal(".card p", {
  ...revealFromBottom,
  delay : 700,
})
ScrollReveal().reveal(".option-card .btn", {
  ...revealFromRight,
  delay : 900,
})
ScrollReveal().reveal(".info-container", {
  ...revealFromLeft,
  delay : 500,
})
ScrollReveal().reveal(".sliderrr h2", {
  ...revealFromLeft,
  delay : 500,
})
ScrollReveal().reveal(".form-box h2", {
  ...revealFromBottom,
  delay : 500,
})
ScrollReveal().reveal(".form-group", {
  ...revealFromBottom,
  delay : 900,
})
ScrollReveal().reveal(".method", {
  ...revealFromBottom,
  delay : 1100,
})
ScrollReveal().reveal(".radio-group", {
  ...revealFromBottom,
  delay : 1100,
})
ScrollReveal().reveal(".submit", {
  ...revealFromLeft,
  delay : 1300,
})