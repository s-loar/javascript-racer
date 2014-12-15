describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player( 'Player1' );
  });

  it("should have a name of Player1", function() {
    expect(player.name).toEqual( 'Player1' );
  });
  

});
