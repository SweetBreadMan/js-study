$(function(){
  /* Password Show & Hide */
  $('.show-pw').click(function(){
    $(this).toggleClass('bi-eye-fill bi-eye-slash-fill');

    var pwType = $(this).siblings('.user-pw').attr('type');
    if(pwType == 'password') {
      $(this).siblings('.user-pw').attr('type', 'text');
    } else {
      $(this).siblings('.user-pw').attr('type', 'password');
    }
  })

  /* Tab Buttons */
  $('.tab-btn').click(function(){
    var activeTab = $(this).attr('data-tab');

    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.tab-inner').removeClass('active');
    $('#' + activeTab).addClass('active');
  })

  /* Custom Select */
  $('.select-title').click(function(){
    $('.select-items').toggle();
  })
  $('.select-items li').click(function(){
    $('.select-title').text($(this).text());
    $('.select-items').hide();
    $('.email-address').val($(this).text());
  })

  /* Agree Check */
  $('.chk-all').click(function(){
    $('.chk').prop('checked', this.checked);
  })
})