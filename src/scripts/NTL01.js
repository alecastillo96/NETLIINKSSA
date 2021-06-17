"use strict";

// const emailValidation = document.getElementById('subscribeMail');
var submitMail = document.getElementById('subscribeMail');
var mailInput = document.querySelector('.subscribe-input');
var alert = document.getElementById('mail-alert');
submitMail.addEventListener('click', function (e) {
  e.preventDefault();
  var error = validateData();
  var msg = mailInput.value;

  if (error[0]) {
    alert.classList.remove('mail-alert-success');
    alert.innerHTML = "<span><b>".concat(error[1], "</span>");
    alert.classList.add('mail-alert-error');
  } else {
    alert.classList.remove('mail-alert-error');
    alert.innerHTML = "<span><b>".concat(msg, "</b> te has subscrito \uD83C\uDF89 </span>");
    alert.classList.add('mail-alert-success');
    mailInput.value = '';
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
  } else if (mailInput.value.indexOf('.') === -1) {
    error[0] = true;
    error[1] = "<span>⚠️</span><i><b> Error:</b> parece que esta no es una dirección de correo válida. <b><code>Falta: punto</code><b></i></i>";
    return error;
  } else {
    error[0] = false;
    return error;
  }
};

var toggleNavbar = document.getElementById('toggle-menu');
toggleNavbar.addEventListener('click', function () {
  var menu = document.getElementById('menu');
  toggleNavbar.classList.toggle('toggle-menu-active');
  menu.classList.toggle('navbar-full-menu');
});

var detectNavigator = function detectNavigator() {
  if (navigator.userAgent.indexOf('firefox/80.0') > -1 == true && navigator.userAgent.indexOf('Firefox') > -1 == true) {
    var navigationFirefox = document.querySelector('.navbar');
    navigationFirefox.classList.add('remove-transparency');
  }
};

var toggleDarkmode = document.getElementById('toggleTheme');
toggleDarkmode.addEventListener('click', function () {
  var HTMLTag = document.querySelector('html');

  if (HTMLTag.classList.contains('dark') == false) {
    HTMLTag.classList.add('dark');
  } else {
    HTMLTag.classList.remove('dark');
  }

  var themeStatus = HTMLTag.classList.contains('dark');

  if (themeStatus == true) {
    localStorage.setItem('dark-mode', themeStatus);
  } else {
    localStorage.setItem('dark-mode', themeStatus);
  }
});

var saveDarkModeStatus = function saveDarkModeStatus() {
  var HTMLTag = document.querySelector('html');
  var themeStatus = JSON.parse(localStorage.getItem('dark-mode'));

  if (themeStatus == true) {
    HTMLTag.classList.add('dark');
  } else {
    HTMLTag.classList.remove('dark');
  }
};

detectNavigator();
saveDarkModeStatus();