"use strict";

window.onload = function () {
  var emailValiaton = document.getElementById('subscribeMail');
  var submitMail = document.getElementById('subscribeMail');
  var mailInput = document.querySelector('.subscribe-input');
  var alert = document.getElementById('mail-alert');
  submitMail.addEventListener('click', function (e) {
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
  };

  var detectNavigator = function detectNavigator() {
    if (navigator.userAgent.indexOf('Firefox/80.0') > -1 == true && navigator.userAgent.indexOf('Firefox') > -1 == true) {
      var navigationFirefox = document.querySelector('.navbar');
      navigationFirefox.classList.add('remove-transparency');
      console.log(navigator.userAgent);
    }
  };

  detectNavigator(); // TODO: Switch darkmode

  var themeSwitch = document.getElementById('toggleTheme');
  themeSwitch.addEventListener('click', function () {
    var htmlDocument = document.getElementsByTagName('html');
    htmlDocument[0].classList.toggle('dark');
  }); // Display news toggler
  // Practice more JavaScript
};