'use strict'; 

$( document ).ready(function() {
  
  var game = new Game();

  game.initilize();
  
  game.play(); // just bind the key events and we are off

  $('#reset').on('click', function( event ){
    game.reset();
  });

  
});