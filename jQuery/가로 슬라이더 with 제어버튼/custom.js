$(function(){
  var sliderWidth = $('.slider').width();
  var sliderHeight = $('.slider').height();
  var sliderCount = $('.slider-item').length;
  var sliderItemsWidth = sliderWidth * sliderCount;

  /* Set Slider Default Postion */
  $('.slider-item:last-child').prependTo($('.slider-items'));
  $('.slider-items').css({
    'margin-left': -sliderWidth
  });

  /* Prev Button */
  function moveLeft(){
    $('.slider-items').animate({left : sliderWidth}, 500, function(){
      $('.slider-items').css({'left' : '0'})
      $('.slider-item:last-child').prependTo('.slider-items');
    })
  }
  /* Next Button */
  function moveRight(){
    $('.slider-items').animate({left : -sliderWidth}, 500, function(){
      $('.slider-items').css({'left' : '0'});
      $('.slider-item:first-child').appendTo('.slider-items');
    })
  }

  $('.prev').click(function(){
    moveLeft();
  })
  $('.next').click(function(){
    moveRight();
  })

  /* Autoplay Control */
  $('#toggle').click(function(){
    if($(this).is(':checked')) {
      autoplay = setInterval(moveRight, 2000);
    } else {
      clearInterval(autoplay);
    }
  })
})