'use strict';

function Player( playerName ) {
	this.name = playerName;

	var playerPosition = 0;

	this.getPosition = function() {
		return playerPosition;
	};

	this.movePlayer = function() {
		playerPosition++;
	};

	this.reset = function() {
		playerPosition = 0;
	};
	
}
