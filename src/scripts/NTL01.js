"use strict";

/* jshint esversion: 6 */
if (document.getElementById('subscribeMail')) {
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
}

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

if (document.querySelectorAll('icon')) {
  var alyv = {
    icon: document.querySelectorAll('icon'),
    renderIcon: function renderIcon() {
      this.icon.forEach(function (iconset) {
        if (iconset.dataset.icon == 'chevron-left') {
          iconset.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><g stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"2\" fill=\"none\" stroke=\"inherit\" class=\"nc-icon-wrapper\"><path d=\"M15 18l-6-6 6-6\"></path></g></svg>";
        } else if (iconset.dataset.icon == 'chevron-right') {
          iconset.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><g stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"2\" fill=\"none\" stroke=\"inherit\" class=\"nc-icon-wrapper\"><path d=\"M9 18l6-6-6-6\"></path></g></svg>";
        } else {
          console.log('error');
        }
      });
    }
  };
  alyv.renderIcon();
}
/*

    CAROUSEL

*/


if (document.getElementById('carousel')) {
  var carousel = {
    items: document.getElementsByClassName('car__item'),
    currentIndex: 0,
    carouselIndicator: document.getElementById('car__indicator_bar_content'),
    prev: document.getElementById('car__dir_left'),
    next: document.getElementById('car__dir_right'),
    indicator: document.getElementsByClassName('dot'),
    renderItems: function renderItems() {
      for (var ims = 0; ims < this.items.length; ims++) {
        this.items[ims].style.display = 'none';
      }

      this.items[this.currentIndex].style.display = 'block';
    },
    prevAnim: function prevAnim() {
      var _this = this;

      for (var pa = 0; pa < this.items.length; pa++) {
        this.items[pa].classList.remove('prevAnim');
        this.items[this.currentIndex].classList.add('prevAnim');
        setTimeout(function () {
          _this.items[_this.currentIndex].classList.remove('prevAnim');
        }, 200);
      }
    },
    nextAnim: function nextAnim() {
      var _this2 = this;

      for (var pa = 0; pa < this.items.length; pa++) {
        this.items[pa].classList.remove('nextAnim');
        this.items[this.currentIndex].classList.add('nextAnim');
        setTimeout(function () {
          _this2.items[_this2.currentIndex].classList.remove('nextAnim');
        }, 200);
      }
    },
    renderIndicators: function renderIndicators() {
      for (var dts = 0; dts < this.items.length; dts++) {
        var dots = document.createElement('LI');
        dots.className = 'dot';
        dots.setAttribute('id', "car__item".concat(parseInt(dts)));
        this.carouselIndicator.appendChild(dots);
      }
    },
    renderCurrentIndicator: function renderCurrentIndicator() {
      for (var ccr = 0; ccr < this.items.length; ccr++) {
        this.indicator[ccr].style.backgroundColor = 'hsl(172, 53%, 50%)';
        this.indicator[ccr].style.height = '5px';
        this.indicator[ccr].style.width = '5px';
      }

      this.indicator[this.currentIndex].style.backgroundColor = 'hsl(172, 53%, 50%)';
      this.indicator[this.currentIndex].style.height = '10px';
      this.indicator[this.currentIndex].style.width = '10px';
      this.indicator[this.currentIndex].style.transition = '.3s all ease';
    }
  };
  carousel.prev.addEventListener('click', function () {
    if (carousel.currentIndex == 0) {
      carousel.currentIndex = carousel.items.length - 1;
    } else {
      carousel.currentIndex--;
    }

    carousel.prevAnim();
    carousel.renderItems();
    carousel.renderCurrentIndicator();
  });
  carousel.next.addEventListener('click', function () {
    if (carousel.currentIndex == carousel.items.length - 1) {
      carousel.currentIndex = 0;
    } else {
      carousel.currentIndex++;
    }

    carousel.nextAnim();
    carousel.renderItems();
    carousel.renderCurrentIndicator();
  });
  carousel.renderItems();
  carousel.renderIndicators();
  carousel.renderCurrentIndicator();
}