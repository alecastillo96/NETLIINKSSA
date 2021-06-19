"use strict";

// C A R O U S E L
var carouselItems = document.querySelectorAll('#carousel-img');
var CAROUSEL_INDICATORBAR = document.getElementById('carousel-indicator');
var renderHTMLFragment = document.createDocumentFragment();
var currentIndex = 0;

for (var i = 0; i < carouselItems.length; i++) {
  var _CAROUSEL_INDICATORS = document.createElement('LI');

  _CAROUSEL_INDICATORS.className = 'dtindicator';

  _CAROUSEL_INDICATORS.setAttribute('id', parseInt(i));

  renderHTMLFragment.appendChild(_CAROUSEL_INDICATORS);
}

CAROUSEL_INDICATORBAR.appendChild(renderHTMLFragment);
var CAROUSEL_INDICATORS = document.querySelectorAll('#carousel-indicator li');

var renderImage = function renderImage() {
  for (var j = 0; j < carouselItems.length; j++) {
    carouselItems[j].style.display = 'none';
  }

  carouselItems[currentIndex].style.display = 'block';
};

var renderDots = function renderDots() {
  for (var k = 0; k < carouselItems.length; k++) {
    CAROUSEL_INDICATORS[k].style.backgroundColor = '#8adbd0';
  }

  CAROUSEL_INDICATORS[currentIndex].style.backgroundColor = '#3cc3b1';
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
CAROUSEL_INDICATORS.forEach(function (carouselIndicator, l) {
  carouselIndicator.addEventListener('click', function () {
    if (currentIndex == 0) {
      currentIndex = l;
    } else {
      currentIndex = l;
    }

    renderImage();
    renderDots();
  });
});
renderDots();
renderImage();