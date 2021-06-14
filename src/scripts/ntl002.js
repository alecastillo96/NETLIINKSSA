"use strict";

// Carousel
window.onload = function () {
  var carouselItems = document.querySelectorAll('.carousel__content-item');
  var carouselIndicatorBar = document.querySelector('.carousel__indicatorbar');
  var currentIndex = 0;

  for (var i = 0; i < carouselItems.length; i++) {
    var newIndicator = document.createElement('LI');
    newIndicator.className = 'carousel__indicator';
    newIndicator.setAttribute('id', parseInt(i));
    carouselIndicatorBar.appendChild(newIndicator);
  }

  function renderContent() {
    for (var j = 0; j < carouselItems.length; j++) {
      carouselItems[j].style.display = 'none';
    }

    carouselItems[currentIndex].style.display = 'block';
  }

  function renderDots() {
    var carouselIndicatorItem = document.querySelectorAll('.carousel__indicator');

    for (var k = 0; k < carouselItems.length; k++) {
      carouselIndicatorItem[k].style.backgroundColor = 'hsl(0, 0%, 95%)';
    }

    carouselIndicatorItem[currentIndex].style.backgroundColor = 'hsl(172, 53%, 50%)';
  }

  function goToCarouselItem() {
    var carouselItemList = document.querySelectorAll('.carousel__indicator');
    carouselItemList.forEach(function (carouselItemListItem, i) {
      carouselItemListItem.addEventListener('click', function () {
        currentIndex = i;
        renderDots();
        renderContent();
      });
    });
  }

  var leftArrow = document.querySelector('.carousel__arrow-left');
  var rightArrow = document.querySelector('.carousel__arrow-right');
  leftArrow.addEventListener('click', function () {
    if (currentIndex == 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex--;
    }

    renderDots();
    renderContent();
  });
  rightArrow.addEventListener('click', function () {
    if (currentIndex == carouselItems.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    renderDots();
    renderContent();
  });
  goToCarouselItem();
  renderDots();
  renderContent();
};
