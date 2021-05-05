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
}; // Validate mail Input


var mailInput = document.querySelector(".mailInput");
mailInput.required = " "; // Set darkmode switcher action

var content = document.getElementsByTagName("html");
var toggleDarkMode = document.querySelector(".toggleDarkMode");
toggleDarkMode.addEventListener('click', function () {
  content[0].classList.toggle('dark');
  toggleDarkMode.classList.toggle('toggleDarkModeActive');

  if (content[0].classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

if (localStorage.getItem('dark-mode') === 'true') {
  content[0].classList.add('dark');
  toggleDarkMode.classList.add('toggleDarkModeActive');
} else {
  content[0].classList.remove('dark');
  toggleDarkMode.classList.remove('toggleDarkModeActive');
}