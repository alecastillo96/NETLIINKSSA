"use strict";

var toggleMenu = function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
};

feather.replace();

var onclick = function onclick() {
  var subsSuccess = document.querySelector('.success');

  if (subsSuccess > 0) {
    alert('Sies');
  }
};