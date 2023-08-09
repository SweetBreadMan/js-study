$(function(){
  /* Date Setup */
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var day = now.getDay();
  var weekday = ['Sun' , 'Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var weekdayString = weekday[day];

  $('.date').text(year + ' / ' + month + ' / ' + date + ' (' + weekdayString + ')');

  /* Time Setup */
  var hour = now.getHours();
  var minute = now.getMinutes();
  var formattedMinutes = String(minute).padStart(2, '0');


  $('.time').text(hour + ' : ' + formattedMinutes);

  /* To Do List */
  $('.list-input').change(function(){
    var val = $(this).val();
    $('.todo-list').append('<li>' + val + '<div class="icons"><i class="bi bi-check-lg"></i><i class="bi bi-trash"></i></div></li>');
    $(this).val('');
  });

  $('.todo-list').on('click', '.bi-check-lg', function(){
    $(this).parents('li').css({'text-decoration' : 'line-through'});
  });

  $('.todo-list').on('click', '.bi-trash', function(){
    $(this).parents('li').fadeOut(200);
  });

  $('.del-all').click(function(){
    $('.todo-list li').fadeOut(200);
  })
})