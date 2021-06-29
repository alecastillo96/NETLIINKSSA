"use strict";

/* jshint esversion: 6 */
var submitMail = document.getElementById("subscribeMail");
var mailInput = document.querySelector(".subscribe-input");
var alert = document.getElementById("mail-alert");
submitMail.addEventListener("click", function (e) {
  e.preventDefault();
  var error = validateData();
  var msg = mailInput.value;

  if (error[0]) {
    alert.classList.remove("mail-alert-success");
    alert.innerHTML = "<span><b>".concat(error[1], "</span>");
    alert.classList.add("mail-alert-error");
  } else {
    alert.classList.remove("mail-alert-error");
    alert.innerHTML = "<span><b>".concat(msg, "</b> te has subscrito \uD83C\uDF89 </span>");
    alert.classList.add("mail-alert-success");
    mailInput.value = "";
  }
});

var validateData = function validateData() {
  var error = [];

  if (mailInput.value.length < 5) {
    error[0] = true;
    error[1] = "<span>⚠️</span><i><b> Error:</b> El correo no puede contener menos de 5 caracteres.</i>";
    return error;
  } else if (mailInput.value.indexOf("@") === -1) {
    error[0] = true;
    error[1] = "<span>⚠️</span><i><b> Error:</b> Parece que esta no es una dirección de correo válida <strong>Falta: arroba</strong></i>";
    return error;
  } else if (mailInput.value.indexOf(".") === -1) {
    error[0] = true;
    error[1] = "<span>⚠️</span><i><b> Error:</b> parece que esta no es una dirección de correo válida. <b><code>Falta: punto</code><b></i></i>";
    return error;
  } else {
    error[0] = false;
    return error;
  }
};

var toggleNavbar = document.getElementById("toggle-menu");
toggleNavbar.addEventListener("click", function () {
  var menu = document.getElementById("menu");
  toggleNavbar.classList.toggle("toggle-menu-active");
  menu.classList.toggle("navbar-full-menu");
});

var detectNavigator = function detectNavigator() {
  if (navigator.userAgent.indexOf("firefox/80.0") > -1 == true && navigator.userAgent.indexOf("Firefox") > -1 == true) {
    var navigationFirefox = document.querySelector(".navbar");
    navigationFirefox.classList.add("remove-transparency");
  }
};

var toggleDarkmode = document.getElementById("toggleTheme");
toggleDarkmode.addEventListener("click", function () {
  var HTMLTag = document.querySelector("html");

  if (HTMLTag.classList.contains("dark") == false) {
    HTMLTag.classList.add("dark");
  } else {
    HTMLTag.classList.remove("dark");
  }

  var themeStatus = HTMLTag.classList.contains("dark");

  if (themeStatus == true) {
    localStorage.setItem("dark-mode", themeStatus);
  } else {
    localStorage.setItem("dark-mode", themeStatus);
  }
});

var saveDarkModeStatus = function saveDarkModeStatus() {
  var HTMLTag = document.querySelector("html");
  var themeStatus = JSON.parse(localStorage.getItem("dark-mode"));

  if (themeStatus == true) {
    HTMLTag.classList.add("dark");
  } else {
    HTMLTag.classList.remove("dark");
  }
};

detectNavigator();
saveDarkModeStatus();

if (document.querySelector(".carousel")) {
  // C A R O U S E L
  var carousel = {
    items: document.querySelectorAll('#carousel-img'),
    indicator_bar: document.getElementById('carousel-indicator'),
    html_fragment: document.createDocumentFragment(),
    currentIndex: 0,
    indicators: function indicators() {
      for (i = 0; i < this.items.length; i++) {
        var dots = document.createElement('LI');
        dots.className = 'dtindicator';
        dots.setAttribute('id', parseInt(i));
        this.indicator_bar.appendChild(dots);
      }
    }
  };
  carousel.indicators();
} // const carouselItems = document.querySelectorAll("#carousel-img");
// const CAROUSEL_INDICATORBAR = document.getElementById("carousel-indicator");
// const HTMLFragment = document.createDocumentFragment();
// let currentIndex = 0;
// for (let i = 0; i < carouselItems.length; i++) {
//   const CAROUSEL_INDICATORS = document.createElement("LI");
//   CAROUSEL_INDICATORS.className = "dtindicator";
//   CAROUSEL_INDICATORS.setAttribute("id", parseInt(i));
//   HTMLFragment.appendChild(CAROUSEL_INDICATORS);
// }
// CAROUSEL_INDICATORBAR.appendChild(HTMLFragment);
// const CAROUSEL_INDICATORS = document.querySelectorAll(
//   "#carousel-indicator li"
// );
// const renderImage = () => {
//   for (let j = 0; j < carouselItems.length; j++) {
//     carouselItems[j].style.display = "none";
//   }
//   carouselItems[currentIndex].style.display = "block";
// };
// const renderDots = () => {
//   for (let k = 0; k < carouselItems.length; k++) {
//     CAROUSEL_INDICATORS[k].style.backgroundColor = "#8adbd0";
//     CAROUSEL_INDICATORS[k].style.height = '5px';
// 		CAROUSEL_INDICATORS[k].style.width = '5px';
//   }
//   CAROUSEL_INDICATORS[currentIndex].style.backgroundColor = "#3cc3b1";
//   CAROUSEL_INDICATORS[currentIndex].style.height = '10px';
//   CAROUSEL_INDICATORS[currentIndex].style.width = '10px';
//   CAROUSEL_INDICATORS[currentIndex].style.transition = '.3s all ease';
// };
// document.getElementById("arrLft").addEventListener("click", () => {
//   if (currentIndex == 0) {
//     currentIndex = carouselItems.length - 1;
//   } else {
//     currentIndex--;
//   }
//   renderDots();
//   renderImage();
// });
// document.getElementById("arrRgth").addEventListener("click", () => {
//   if (currentIndex == carouselItems.length - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   renderDots();
//   renderImage();
// });
// CAROUSEL_INDICATORS.forEach((carouselIndicator, l) => {
//   carouselIndicator.addEventListener("click", () => {
//     if (currentIndex == 0) {
//       currentIndex = l;
//     } else {
//       currentIndex = l;
//     }
//     renderImage();
//     renderDots();
//   });
// });
// renderDots();
// renderImage();