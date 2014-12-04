'use strict';

$( document ).ready(function() {
  var player1 = new Player('Player1');
  var player2 = new Player('Player2');

  var isGameWon = function() {
    if ( player1.getPosition() === 15 || player2.getPosition() === 15 ) {
      return true;
    }
    return false;
  };

  var getGameWinner = function() {
    if ( player1.getPosition() === 15 ) {
      return player1.name;
    }
    return player2.name;
  };

  $('#reset').on('click', function(event){
    player1.reset();
    $("#player1_strip td.active").removeClass("active");

    player2.reset();
    $("#player2_strip td.active").removeClass("active");

    $("#status").hide();
  });

  // this is the main game loop
  $(document).on('keyup', function(event) {
    if (event.which !== 0) {
      if ( isGameWon() ) {
        // the game is over, so anounce the winner
        $("#winner").html( getGameWinner() );
        $("#status").show();
      }
      else {
        if (event.which == 81) {
          player1.movePlayer();
          $("#player1_strip td.active").removeClass("active");
          $("#player1_strip td:nth-child(" + player1.getPosition() + ")").addClass("active");
        }

        if (event.which == 80) {
          player2.movePlayer();
          $("#player2_strip td.active").removeClass("active");
          $("#player2_strip td:nth-child(" + player2.getPosition() + ")").addClass("active");
        }
      }
    }
  });
});