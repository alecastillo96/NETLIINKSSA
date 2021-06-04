"use strict";

// =====================================
// Modal
// =====================================
var NAVBAR = document.querySelector('.navbar');

window.onscroll = function () {
  if (window.scrollY > 418 || window.scrollY > 551) {
    NAVBAR.classList.add('navbar__is-scroll');
  } else if (window.scrollY < 417 || window.scrollY == 0) {
    NAVBAR.classList.remove('navbar__is-scroll');
  }
}; // =====================================
// Modal
// =====================================


var openModal = function openModal(value) {
  var MODALWINDOW = document.getElementById("modal-" + value);
  MODALWINDOW.classList.add('open__modal');
};

var closeModal = function closeModal(value) {
  var MODALWINDOW = document.getElementById("modal-" + value);
  MODALWINDOW.classList.remove('open__modal');
}; // // =====================================
// // Toggle Darkmode
// // =====================================
// let content = document.getElementsByTagName("html");
// let toggleDarkMode  = document.querySelector("#toggle__theme");
// function switchDarkMode() {
//   content[0].classList.toggle('dark');
//   toggleDarkMode.classList.toggle('toggleDarkModeActive');
//   // LocalStorage
//   // Save dark mode preferences;
//   if(content[0].classList.contains('dark')) {
//     localStorage.setItem('dark-mode', 'true');
//   } else {
//     localStorage.setItem('dark-mode', 'false');
//   }
// }
// // Save Dark theme on web browsers
// if (localStorage.getItem('dark-mode') === 'true') {
//   content[0].classList.add('dark');
//   toggleDarkMode.classList.add('toggleDarkModeActive');
// } else {
//   content[0].classList.remove('dark');
//   toggleDarkMode.classList.remove('toggleDarkModeActive');
// }
// document.querySelector('#toggle__theme').addEventListener('click', ()=> {
//   switchDarkMode();
// });
// =====================================
// Modal
// =====================================


var mailInput = document.querySelector('.mailInput');
var sendMailButton = document.getElementById('sendMailButton');
var alert = document.getElementById('mailAlert');
sendMailButton.addEventListener('click', function (e) {
  e.preventDefault();
  var error = validateData();
  var ms = mailInput.value;

  if (error[0]) {
    alert.classList.remove('mail-alert-success');
    alert.innerHTML = "<span>".concat(error[1], "</span>");
    alert.classList.add('mail-alert-error');
  } else {
    alert.classList.remove('mail-alert-error');
    alert.innerHTML = "<span><b>".concat(ms, "</b> te has suscrito \uD83C\uDF89</span>");
    alert.classList.add('mail-alert-success');
    setTimeout(function () {
      mailInput.value = "";
    }, 200);
  }
});

var validateData = function validateData() {
  var error = [];

  if (mailInput.value.length < 5) {
    error[0] = true;
    error[1] = "<i><b>Error:</b> el correo no puede contener menos de 5 caracteres.</i>";
    return error;
  } else if (mailInput.value.indexOf("@") === -1) {
    error[0] = true;
    error[1] = "<i><b>Error:</b> parece que esta no es una dirección de correo válida. <b><code>Falta: arroba</code><b></i>";
    return error;
  } else if (mailInput.value.indexOf(".") === -1) {
    error[0] = true;
    error[1] = "<i><b>Error:</b> parece que esta no es una dirección de correo válida. <b><code>Falta: punto</code><b></i></i>";
    return error;
  }

  error[0] = false;
  return error;
}; // Carousel


window.onload = function () {
  var carouselItems = document.querySelectorAll('img');
  var carouselIndicatorBar = document.querySelector('.carousel__indicatorbar');
  var currentIndex = 0;

  for (h = 0; h < carouselItems.length; h++) {
    var newIndicator = document.createElement('LI');
    newIndicator.className = 'carousel__indicator';
    newIndicator.setAttribute('id', parseInt(h));
    carouselIndicatorBar.appendChild(newIndicator);
  }

  var renderContent = function renderContent() {
    for (j = 0; j < carouselItems.length; j++) {
      carouselItems[j].style.display = 'none';
    }

    carouselItems[currentIndex].style.display = 'block';
  };

  var renderDots = function renderDots() {
    var carouselIndicatorItem = document.querySelectorAll('.carousel__indicator');

    for (k = 0; k < carouselItems.length; k++) {
      carouselIndicatorItem[k].style.backgroundColor = 'red';
    }

    carouselIndicatorItem[currentIndex].style.backgroundColor = 'black';
  };

  var leftArrow = document.querySelector('.carousel__arrow-left');
  var rightArrow = document.querySelector('.carousel__arrow-right');
  leftArrow.addEventListener('click', function () {
    if (currentIndex == 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex--;
    }

    renderDots();
    renderContent();
  });
  rightArrow.addEventListener('click', function () {
    if (currentIndex == carouselItems.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    renderDots();
    renderContent();
  });
  renderDots();
  renderContent();
};