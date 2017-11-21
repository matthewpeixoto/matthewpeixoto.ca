var $smSectionIntroImages = [$('.sm-section-intro-image-user-experience'), $('.sm-section-intro-image-personas'), $('.sm-section-intro-image-visual-design'), $('.sm-section-intro-image-ideation')];

$smSectionIntroImages.forEach(function (smSectionIntroImage) {
  smSectionIntroImage.waypoint(function (direction) {
    if (direction == 'down') {
      smSectionIntroImage.addClass('js-sm-section-intro-image-animate');
    } else {
      smSectionIntroImage.removeClass('js-sm-section-intro-image-animate');
    }
  }, {offset: '75%'});
});
