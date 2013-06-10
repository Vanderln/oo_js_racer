$(document).ready(function() {

  $('.winner-1').hide();
  $('.winner-2').hide();
  $('#replay').hide();

  var no_winner = true;

  for(var i=0; i<20; i++) {
    var cell = "<div data-location='"+i+"'></div>";
    $('.track1').append(cell);
    $('.track2').append(cell);
  };

  $('.track1 [data-location="0"]').addClass('player1');
  $('.track2 [data-location="0"]').addClass('player2');

  var checkVictory = function() {
    var player1Location = $('.track1 .player1').data('location');
    var player2Location = $('.track2 .player2').data('location');

    if (player1Location === 19 && no_winner) { 
      $('.winner-1').slideDown(); 
      $('#replay').slideDown(); 
      no_winner = false;
      $.post('/declare_winner', {'winner': players["player_1"]});
      $(document).keyup(function(event) { event.stopPropagation(); });
    };
    if (player2Location === 19 && no_winner) { 
      $('.winner-2').slideDown(); 
      $('#replay').slideDown(); 
      no_winner = false;
      $.post('declare_winner', {'winner': players["player_2"]});
      $(document).keyup(function(event) { event.stopPropagation(); });
    };
  };

  $(document).keyup(function(event) {
    var player1Next = parseInt($('.track1 .player1').data('location')) + 1;
    var player2Next = parseInt($('.track2 .player2').data('location')) + 1;
    if (event.keyCode == 81){
      $('div').removeClass('player1');
      $(".track1 [data-location='"+player1Next+"']").addClass('player1');
    }; //q button
    if (event.keyCode == 80){
      $('div').removeClass('player2');
      $(".track2 [data-location='"+player2Next+"']").addClass('player2');
    }; //p button
    checkVictory();
  });
});
