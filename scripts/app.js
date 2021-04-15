"use strict";

var toggleMenu = function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}; // Tabs


document.querySelectorAll(".controls button").forEach(function (button) {
  button.addEventListener("click", function (ev) {
    var parent = button.parentNode;
    var granParent = parent.parentNode;
    var container = granParent.querySelector(".tabs-container");
    var childrenList = Array.from(parent.children);
    var index = childrenList.indexOf(button);
    container.style.transform = "translatex(-".concat(index * 100, "%)");
    parent.querySelectorAll("button.tabButtonActive").forEach(function (activeBtn) {
      return activeBtn.classList.remove("tabButtonActive");
    });
    button.classList.add("tabButtonActive");
  });
});
feather.replace(); // Abrir ventana modal

var openModal = function openModal(param) {
  var modal_container = document.getElementById("modal-" + param);
  modal_container.classList.add('show');
};

var closeModal = function closeModal(param) {
  var modal_container = document.getElementById("modal-" + param);
  modal_container.classList.remove('show');
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
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('cont1').innerHTML = securitySystems;
  document.getElementById('cont2').innerHTML = netWorking;
  document.getElementById('cont3').innerHTML = it;
  document.getElementById('cont4').innerHTML = softwareDevelopment;
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById('securitySystemsModal').innerHTML = securitySystemsModal;
  document.getElementById('networkingModal').innerHTML = netWorkingModal;
  document.getElementById('itModal').innerHTML = itModal;
  document.getElementById('softwareDevelopmentModal').innerHTML = softwareDevelopmentModal;
});