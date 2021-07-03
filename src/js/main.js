$(document).ready(function(){
  $('.main-slider').slick({
    // autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'slider-dots',
  });
});

$('#humburgerMenuBtn').on('click', () => {
  $('#humburgerMenuBtn').toggleClass('active');
  $('#navHeaderMenu').toggleClass('active');
})

if ($('#map').length) {
  ymaps.ready(init);

  function init(){
    const myLocation = [53.884328, 27.532366];

    myMap = new ymaps.Map("map", {
      center: myLocation,
      zoom: 16
    }),

    myPlacemark = new ymaps.Placemark(myLocation, {}, {
      preset: 'islands#greenIcon'
    });

    myMap.geoObjects.add(myPlacemark);
  }
}

(function($) {
  $(function() {
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);