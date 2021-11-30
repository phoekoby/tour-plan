var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});
swiper.on('mouseover mouseout', function() {
  $(this).toggleClass('keydown');
});
$(document).keydown(function(e) {
    if (e.keyCode == '39') {
      swiper.slideNext();
    } else if (e.keyCode == '37') {
      swiper.slidePrev();
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