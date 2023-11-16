"use strict";

//! NAV BUTTON

const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");


btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");

});

// ! POP UP
const triggerDiv = document.getElementById('triggerDiv');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

triggerDiv.addEventListener("click", () => {
  popup.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});

//! SWIPER
// Swiper init

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: "auto",
  spaceBetween: 30,

  breakpoints: {
    // When window width is <= 768px (phone mode)
    // ? For some reasons, this works as a laptop mode
    768: {
      slidesPerView: 2, // Number of slides in laptop mode
      // spaceBetween: 10, // Adjust as needed for phone mode
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    scrollable: true,
  },
  mousewheel: true,
  keyboard: true,
  touch: true,
});


// ! FLIP CARD

function toggleCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('active');
}



// ! SUBSCRIBE FORM

const form = document.querySelector('#subscribeForm');

const subForm = function (e) {
  e.preventDefault();
  const subBtn = document.querySelector('.subscribe-btn');
  subBtn.innerText = 'Subscribed!';
  subBtn.style.fontSize = '16px';
  subBtn.style.textTransform = 'uppercase';
  subBtn.style.backgroundColor = 'rgba(21, 42, 0, 1)';
  subBtn.style.borderColor = 'rgba(21, 42, 0, 1)';
  subBtn.style.color = '#ffff';

  const output = document.querySelector('#output');
  output.innerText = "Thank you for subscribing!";

  const emailInput = document.querySelector('.email-input').value;

  if ((subBtn.innerText = 'Subscribed!') && (output.innerText = "Thank you for subscribing!")) {
    form.reset();
  }
  // const div = document.createElement('h2');
  // div.innerText = 'Subscribed!';
  // document.body.appendChild(div);
}

form.addEventListener('submit', subForm)