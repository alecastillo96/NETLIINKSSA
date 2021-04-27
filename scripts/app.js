"use strict";

/* jshint esversion: 6 */
// Render feather icons
feather.replace(); // Responsive navigation button

var toggleMenu = function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}; // Toggle items


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
} // Abrir ventana modal


var openModal = function openModal(param) {
  var modal_container = document.getElementById("modal-" + param);
  modal_container.classList.add('show');
}; // Cerrar ventana modal


var closeModal = function closeModal(param) {
  var modal_container = document.getElementById("modal-" + param);
  modal_container.classList.remove('show');
};