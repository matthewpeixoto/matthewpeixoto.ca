var $smIntroPhotos = [$('.sm-section-intro-image-user-experience'), $('.sm-section-intro-image-personas'), $('.sm-section-intro-image-visual-design'), $('.sm-section-intro-image-ideation')];

$smIntroPhotos.forEach(function (smIntroPhoto) {
  smIntroPhoto.waypoint(function (direction) {
    if (direction == 'down') {
      smIntroPhoto.addClass('js-sm-section-intro-image-animate');
    } else {
      smIntroPhoto.removeClass('js-sm-section-intro-image-animate');
    }
  }, {offset: '75%'});
});

var $geomattricShapes = [$('.modular-system'), $('.friendly-curves-1'), $('.friendly-curves-2'), $('.geometric-forms-2'), $('.geometric-forms-3'), $('.geometric-forms-4'), $('.geometric-forms-5'), $('.geometric-forms-6'), $('.geometric-forms-7')];
var $geomattricShift = $('.js-geomattric-shift');
var $win = $(window);

$geomattricShapes.forEach(function (geomattricShape) {
  geomattricShape.waypoint(function (direction) {
    if (direction == 'down') {
      geomattricShape.addClass('js-geomattric-shift');
    } else {
      geomattricShape.removeClass('js-geomattric-shift');
    }
  }, {offset: '50%'});
});

$win.on('scroll', function () {
  var top = ($win.scrollTop() - ($win.scrollTop() * 2)) / 10;
  $geomattricShift.css('transform', 'translateY(' + top + 'px)')
});
