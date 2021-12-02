var hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
var reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

hotelSwiper.on('mouseover mouseout', function() {
  $(this).toggleClass('keydown');
});
$(document).keydown(function(e) {
    if (e.keyCode == '39') {
      hotelSwiper.slideNext();
    } else if (e.keyCode == '37') {
      hotelSwiper.slidePrev();
    }
  
});


// function _resizeDiv(options){
//   var ratio=options.ratio;
//       var elem = $(options.element);
//       if(document.documentElement)
//       if(document.documentElement.clientWidth<=768){
//         console.log(1);
//         elem.css({'max-height':elem.width()*ratio,
//                   'max-width': 700})
//       }else if(document.documentElement.clientWidth>768){
//         console.log(elem.width());
//         elem.css({'max-height':elem.width()*0.62,
//                   'max-width': 728,
//                   })
//       }
    
//   }
//   $(window).resize(function(){
//       var elem = document.getElementById('slider');
//       _resizeDiv({
//         ratio:0.6428,
//         element:elem
//       })
//   })