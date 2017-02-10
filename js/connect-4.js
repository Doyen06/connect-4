console.log("CONNECT 4");

//all properties of the game
function ConnectFor(player1Name, player2Name){
  this.board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  this.player1 = player1Name;
  this.player2 = player2Name;
  this.winner = null;

//50/50 chance for either player to stat (only floor when looking for an index for array)
  if (Math.random() < 0.5) {
    this.currentPlayer = this.player1;
  } else{
    this.currentPlayer = this.player2;
  }
}

var newConnectGame = new ConnectFor('Doyen', 'Nizar');
  console.log(newConnectGame);
