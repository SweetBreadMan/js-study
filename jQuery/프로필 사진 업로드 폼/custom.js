$(function () {
  /* File Name Get & Preview Img Set */
  $('#upload').change(function() {
    var fileName = $(this).val().split('\\').pop()

    $('.profile-photo img').attr('src', 'images/' + fileName);
  })

  /* Remove Photo */
  $('.remove-photo').click(function(){
    $('.profile-photo img').attr('src', 'images/profile-01.jpg')
  })
})