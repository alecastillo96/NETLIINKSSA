"use strict";

// C A R O U S E L
var carouselItems = document.querySelectorAll('#carousel-img');
var carouselIndicatorBar = document.getElementById('carousel-indicator');
var renderHTMLFragment = document.createDocumentFragment();
var currentIndex = 0;

for (var dts = 0; dts < carouselItems.length; dts++) {
  var carouselIndicator = document.createElement('LI');
  carouselIndicator.className = 'dtindicator';
  carouselIndicator.setAttribute('id', parseInt(dts));
  renderHTMLFragment.appendChild(carouselIndicator);
}

carouselIndicatorBar.appendChild(renderHTMLFragment);
var carouselDotIndicator = document.querySelectorAll('#carousel-indicator li');

var renderImage = function renderImage() {
  for (var cimg = 0; cimg < carouselItems.length; cimg++) {
    carouselItems[cimg].style.display = 'none';
  }

  carouselItems[currentIndex].style.display = 'block';
};

var renderDots = function renderDots() {
  for (var cdot = 0; cdot < carouselItems.length; cdot++) {
    carouselDotIndicator[cdot].style.backgroundColor = '#8adbd0';
  }

  carouselDotIndicator[currentIndex].style.backgroundColor = '#3cc3b1';
};

document.getElementById('arrLft').addEventListener('click', function () {
  if (currentIndex == 0) {
    currentIndex = carouselItems.length - 1;
  } else {
    currentIndex--;
  }

  renderDots();
  renderImage();
});
document.getElementById('arrRgth').addEventListener('click', function () {
  if (currentIndex == carouselItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  renderDots();
  renderImage();
});
carouselDotIndicator.forEach(function (cind, i) {
  cind.addEventListener('click', function () {
    if (currentIndex == 0) {
      currentIndex = i;
    } else {
      currentIndex = i;
    }

    renderImage();
    renderDots();
  });
});
renderDots();
renderImage();