// Portfolio
var Portfolio = function() {
  'use strict';

  // Handle Portfolio
  var handlePortfolio = function() {
    $('#js__grid-portfolio-gallery,#js__grid-portfolio-gallery2,#js__grid-portfolio-gallery3,#js__grid-portfolio-gallery4').cubeportfolio({
      filters: '#js__filters-portfolio-gallery',
      layoutMode: 'slider',
      animationType:'slideLeft',
      mediaQueries: [{
        width: 1500,
        cols: 5
      }, {
        width: 1100,
        cols: 5
      }, {
        width: 800,
        cols: 3
      }, {
        width: 480,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      defaultFilter: '*',
      gapHorizontal: 15,
      gapVertical: 15,
      gridAdjustment: 'responsive',
      caption: ' ',

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      displayType: 'lazyLoading',
      displayTypeSpeed: 10,
      auto:true
    });
  }

  return {
    init: function() {
      handlePortfolio(); // initial setup for Portfolio
    }
  }
}();

$(document).ready(function() {
  Portfolio.init();
});