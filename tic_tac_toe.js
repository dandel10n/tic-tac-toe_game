var TicTacToe = function() {
  this.winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  this.board = [null, null, null, null, null, null, null, null, null];
  this.player1;
  this.player2;
  this.currentPlayer = null;
  this.boardCallback = null;
  this.resultCallback = null;
  this.multiplayerGame;
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

TicTacToe.prototype.setMultiplayerGame = function(multiplayer) {
  this.multiplayerGame = multiplayer;
}

TicTacToe.prototype.setBoardCallback = function(callback) {
  this.boardCallback = callback;
};

TicTacToe.prototype.setResultCallback = function(callback) {
  this.resultCallback = callback;
};

TicTacToe.prototype.computerMove = function() {
  var bestMove = this.minimax(this.board, this.player2);
  this.setMove(bestMove.index);
}

TicTacToe.prototype.setMove = function(number) {
  if (this.board[number] === null) {
    if(this.currentPlayer === null || this.currentPlayer == this.player2) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
    this.board[number] = this.currentPlayer;
    this.boardMovesHandler();
    this.checkWinner();

    if(!this.multiplayerGame && this.currentPlayer === this.player1) {
      this.computerMove();
    }
  }
}

TicTacToe.prototype.cleanTheBoard = function() {
  this.board = [null, null, null, null, null, null, null, null, null];
  this.player1 = null;
  this.player2 = null;
  this.currentPlayer = null;
  this.boardMovesHandler();
}

TicTacToe.prototype.playerIsWinner = function(board, player) {
  for (var i = 0; i < this.winCombinations.length; i++) {
    var firstCell = board[this.winCombinations[i][0]];
    var secondCell = board[this.winCombinations[i][1]];
    var thirdCell = board[this.winCombinations[i][2]];

    if (firstCell !== null && firstCell == secondCell && firstCell == thirdCell && firstCell == player) {
      return true;
    }
  }
  return false;
}

TicTacToe.prototype.checkWinner = function() {
  if(this.playerIsWinner(this.board, this.currentPlayer)) {
    this.resultCallback(this.currentPlayer);
  } else if (this.stillEmptyCells().length === 0) {
    this.resultCallback(null);
  }
}

TicTacToe.prototype.boardMovesHandler = function() {
  this.boardCallback(this.board);
};

TicTacToe.prototype.stillEmptyCells = function(){
  var avaliableCells = [];
  for (var i = 0; i < this.board.length; i++) {
    if(this.board[i] != "O" && this.board[i] != "X") {
      avaliableCells.push(i);
    }
  };
  return avaliableCells;
}

TicTacToe.prototype.minimax = function(newBoard, player){

  var stillAvaliableCells = this.stillEmptyCells();

  if (this.playerIsWinner(newBoard, this.player1)){
     return {score:-10};
  } else if (this.playerIsWinner(newBoard, this.player2)){
    return {score:10};
	} else if (stillAvaliableCells.length === 0){
    return {score:0};
  }

  //будет хранить в себе все объекты move
  var moves = [];

  for (var a = 0; a < stillAvaliableCells.length; a++){
    var move = {};
    move.index = stillAvaliableCells[a];

    newBoard[stillAvaliableCells[a]] = player;
    if (player == this.player2){
      var result = this.minimax(newBoard, this.player1);
      move.score = result.score;
    }
    else{
      var result = this.minimax(newBoard, this.player2);
      move.score = result.score;
    }

    //очищаем клетку после вычисления счета
    newBoard[stillAvaliableCells[a]] = null;

    moves.push(move);
  }

  var bestMove;
  if(player === this.player2){
    var bestScore = -10000;
    for(var q = 0; q < moves.length; q++){
      if(moves[q].score > bestScore){
        bestScore = moves[q].score;
        bestMove = q;
      }
    }
  } else {
    var bestScore = 10000;
    for(var p = 0; p < moves.length; p++){
      if(moves[p].score < bestScore){
        bestScore = moves[p].score;
        bestMove = p;
      }
    }
  }

  return moves[bestMove];
}
