$(function(){
  $('.content-item').slice(0, 3).show();

  $('.load-more').click(function(){
    $('.content-item:hidden').slice(0, 3).fadeIn(1000);

    if($('.content-item:hidden').length == 0){
      $(this).hide();
    }
  })
})