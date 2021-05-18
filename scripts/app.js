"use strict";

/* jshint esversion: 6 */
// RENDER FEATHER ICONS
feather.replace(); // TOOGLE RESPONSIVE - NAVIGATION BAR

var toggleMenu = document.querySelector(".toggleMenu");
var navigationContent = document.querySelector('.navigation');
toggleMenu.addEventListener('click', function () {
  toggleMenu.classList.toggle('active');
  navigationContent.classList.toggle('active');
}); // TOGGLE NEWS BAR

var toggler = document.getElementsByClassName('toggler');

for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.classList.toggle("toggler_active");
    var togglerContent = this.nextElementSibling;

    if (togglerContent.style.maxHeight) {
      togglerContent.style.maxHeight = null;
    } else {
      togglerContent.style.maxHeight = togglerContent.scrollHeight + "px";
    }
  });
} // MODAL WINDOW
// open


var openModal = function openModal(value) {
  var modal_container = document.getElementById("modal-" + value);
  modal_container.classList.add('show');
}; // close


var closeModal = function closeModal(value) {
  var modal_container = document.getElementById("modal-" + value);
  modal_container.classList.remove('show');
}; // Set darkmode switcher action


var content = document.getElementsByTagName("html");
var toggleDarkMode = document.querySelector(".toggleDarkMode");

function switchDarkMode() {
  content[0].classList.toggle('dark');
  toggleDarkMode.classList.toggle('toggleDarkModeActive');

  if (content[0].classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
}

if (localStorage.getItem('dark-mode') === 'true') {
  content[0].classList.add('dark');
  toggleDarkMode.classList.add('toggleDarkModeActive');
} else {
  content[0].classList.remove('dark');
  toggleDarkMode.classList.remove('toggleDarkModeActive');
}
/* Validar el mail */


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
};