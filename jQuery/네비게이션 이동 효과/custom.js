$(function () {
  var color = $('.home').data('color');
  var width = $('.home').outerWidth();
  var parentOffset = $('.home').parent().offset();
  var left = $('.home').offset().left - parentOffset.left;

  $('.item-bottom').css('background-color', color);
  $('.item-bottom').css('width', width);
  $('.item-bottom').css('left', left);


  $('.item').click(function () {
    var color = $(this).data('color');
    var width = $(this).outerWidth();
    var parentOffset = $(this).parent().offset();
    var left = $(this).offset().left - parentOffset.left;

    $(this).removeAttr('style');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.item-bottom').css('background-color', color);
    $('.item-bottom').css('width', width);
    $('.item-bottom').css('left', left);
  })
})