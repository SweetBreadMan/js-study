$(function(){
  var zoomSrc = $('.gallery a'),
  overlay = $('.lightbox-overlay'),
  overlayImage = overlay.find('img');
  overlayCaption = overlay.find('span');

  /* Open Lightbox */
  zoomSrc.click(function(e){
    var src = $(this).attr('href');

    overlay.addClass('active');
    overlayImage.attr('src', src);
    overlayCaption.text($(this).attr('data-caption'));
    e.preventDefault();
  });

  /* Close Lightbox */
  overlay.click(function(){
    $(this).removeClass('active');
  });
})