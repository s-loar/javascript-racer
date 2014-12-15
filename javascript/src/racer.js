'use strict'; 

$( document ).ready(function() {
  
  var game = new Game();

  game.initilize();
  
  game.play();

  $('#reset').on('click', function( event ){
    game.reset();
    game.play();
  });

  
});