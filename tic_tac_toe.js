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
  if (this.board[0] == null) {
    this.board[0] = this.player2;
  } else if (this.board[1] == null) {
    this.board[1] = this.player2;
  } else if (this.board[2] == null) {
    this.board[2] = this.player2;
  }
  this.boardMovesHandler();
  this.checkWinner();
}

TicTacToe.prototype.setMove = function(number) {
  if (this.board[number] === null) {
    if (this.multiplayerGame) {
      if(this.currentPlayer === null || this.currentPlayer == this.player2) {
        this.currentPlayer = this.player1;
      } else {
        this.currentPlayer = this.player2;
      }
      this.board[number] = this.currentPlayer;
    } else {
      this.board[number] = this.player1;
    }
    this.boardMovesHandler();
    this.checkWinner();
    if (!this.multiplayerGame) {
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

TicTacToe.prototype.checkWinner = function() {
  for (var i = 0; i < this.winCombinations.length; i++) {
    var firstCell = this.board[this.winCombinations[i][0]];
    var secondCell = this.board[this.winCombinations[i][1]];
    var thirdCell = this.board[this.winCombinations[i][2]];

    if (firstCell !== null && firstCell == secondCell && firstCell == thirdCell) {
      this.resultCallback(firstCell);
    }
  }

  var stillPlaying = [];
  for (var b = 0; b < this.board.length; b++) {
    if (this.board[b] === null) {
      stillPlaying.push(this.board[b]);
    }
  }
  if (stillPlaying.length == 0) {
    this.resultCallback(null);
  }
}

TicTacToe.prototype.boardMovesHandler = function() {
  this.boardCallback(this.board);
};
