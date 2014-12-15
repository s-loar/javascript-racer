describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player( 'Player1' );
  });

  it("should have a name of Player1", function() {
    expect(player.name).toEqual( 'Player1' );
  });

  it("should have an initial position of 0", function() {
  	expect(player.getPosition()).toEqual( 0 );
  });
  
  it("should have a position of 1 after movement", function() {
  	player.movePlayer();
  	expect(player.getPosition()).toEqual( 1 );
  });

  it("should have a position of 0 after being reset", function() {
  	player.reset();
  	expect(player.getPosition()).toEqual( 0 );
  });

});
