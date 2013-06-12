



var board = { 
  

  printBoard: function(){
    for(var j=0; j<20; j++) {
    var cell = "<div data-location='"+j+"'></div>";
    $('.track1').append(cell);
    $('.track2').append(cell);
    };
  },

  movePlayer: function(playersArray){
     //ended here. Not sure why it doesn't work.
      var next = parseInt($('track'+(i+1)+' .'+ players[i].player+'').data('location'))+1;
        if (event.keyCode === players[i].key){
          board.checkVictory(id, players[i].player);
          $('div').removeClass(players[i].player);
          $(".track1 [data-location='"+next+"']").addClass(players[i].player);
        } //q button
      // if (event.keyCode == 80){
      //   checkVictory(1, "player2")
      //   $('div').removeClass('player2');
      //   $(".track2 [data-location='"+player2Next+"']").addClass('player2');
      // }; //p button
   
  },

  hideMessages: function(){
      $('.winner-1').hide();
      $('.winner-2').hide();
      $('#replay').hide();
  },

  declareWinner: function(player){
      no_winner = false;
      $.post('/declare_winner', {'winner': players[player]
      });
  },  // stopKeys();
      
  checkVictory: function(id, player) {
    var Location = $('.track'+(id+1)+' .' + player +'').data('location');
      if (Location === 19 && no_winner) { 
        $('.winner-' + (id + 1) +'').slideDown(); 
        $('#replay').slideDown(); 
        board.declareWinner('player_' + (id+1) +'');  
    }
  }

 
}

function Player (player, key){
  this.player = player; //this will player name
  this.key = key; //this will be the 80 or 81 which are the key codes for "q" or "p"
}

  // stopKeys: function(){
  //   $(document).unbind('keyup');
  // }
  




$(document).ready(function() {
  var pl1 = new Player("player1", 81);
  var pl2 = new Player("player2", 80);
  var no_winner = true;
  var players=[pl1, pl2];

  
  board.hideMessages();

  board.printBoard();  
  
    

    $(document).keyup(function(event) {
      for (var i = 0; i < players.length; i++){
        $('.track'+ (i + 1) +' [data-location="0"]').addClass(players[i].player);
    
      //see move player method. Below not working. Almost there.
      debugger
      board.movePlayer(players[i].player)
      }
    });
    
});
