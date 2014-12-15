'use strict';
 
function Game() {

	var player1 = new Player('Player1');
  var player2 = new Player('Player2');
  var self = this;

  this.initilize = function() {
  	var playerRow = "";

  	$('.racer_table tbody').empty();
  	$("#status").hide();
    $( "body" ).unbind();

  	for ( var x = 1; x < 3; x++ ) {
  		playerRow = "<tr id='player" + x + "_strip'>";
  		for ( var i = 0; i < 15; i++ ) {
  			playerRow += "<td></td>";
  		}
  		playerRow += "</tr>";
  		$('.racer_table tbody').append(playerRow);
  	}
  };
	
	this.isGameWon = function() {
    if ( player1.getPosition() === 15 || player2.getPosition() === 15 ) {
      return true;
    }
    return false;
  };

  this.getGameWinner = function() {
    if ( player1.getPosition() === 15 ) {
      return player1.name;
    }
    return player2.name;
  };

  this.reset = function() {
  	// reset the board for another race
  	player1.reset();
  	player2.reset();

    self.initilize();

  };

  this.play = function() {
  	// this is the main game loop
	  $('body').on('keyup', function(event) {

	    if (event.which !== 0) {
	      if ( self.isGameWon() ) {
	        // the game is over, so anounce the winner
	        $("#winner").html( self.getGameWinner() );
	        $("#status").show();
	      }
	      else {
	        if ( event.which == 81 ) {
	        	// move player 1 on q key
	          player1.movePlayer();
	          $("#player1_strip td.active").removeClass("active");
	          $("#player1_strip td:nth-child(" + player1.getPosition() + ")").addClass("active");
	        }

	        if (event.which == 80) {
	        	// move player 2 on p key
	          player2.movePlayer();
	          $("#player2_strip td.active").removeClass("active");
	          $("#player2_strip td:nth-child(" + player2.getPosition() + ")").addClass("active");
	        }
	      }
	    }
	  });
  };
	
}