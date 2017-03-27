var TicTacToe = function() {
  this.winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

this.board = [null, null, null, null, null, null, null, null, null];

  this.player1;
  this.player2;
  this.currentPlayer;
}

TicTacToe.prototype.setPlayers = function(player1, player2) {
  var availableValues = ['X', 'O'];

  if (availableValues.indexOf(player1) != -1 && availableValues.indexOf(player2) != -1) {
    if (player1 !== player2) {
      this.player1 = player1;
      this.player2 = player2;
      console.log("player1", this.player1, "player2", this.player2);
    }
  }
}

TicTacToe.prototype.setMove = function(number) {
  if(!this.currentPlayer || this.currentPlayer == this.player2) {
    this.currentPlayer = this.player1;
  } else {
    this.currentPlayer = this.player2;
  }
  this.board[number] = this.currentPlayer;
  console.log(this.board);
}

TicTacToe.prototype.cleanTheBoard = function() {

}

TicTacToe.prototype.getWinner = function() {

}
