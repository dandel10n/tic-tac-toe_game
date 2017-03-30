$(document).ready(function(){
  var game = new TicTacToe();

  $(".chooseGameButton").click(function() {
    game.setMultiplayerGame($(this).data("multiplayer"));
  });

  $(".chooseXOButton").click(function(){
    game.setPlayers($(this).data("player1"), $(this).data("player2"));
    $(".chooseXOButton").prop("disabled", true);
    $(".winner").remove();

    $(".grid_cell").bind("click", function(){
      game.setMove($(this).data("number"));
    });
  });

  function boardRendering(board) {
    for (var i = 0; i < 9; i++) {
      $('.grid_cell[data-number="' + i + '"]').text(board[i]);
    }
  }

  function resultRendering(result) {
    if (result === null) {
      $("#game-field").append("<p class='winner'>It was a draw</p>");
    } else {
      $("#game-field").append("<p class='winner'>" + result + " wins!!</p>");
    }
    setTimeout(this.cleanTheBoard.bind(this), 2000);
    $(".chooseXOButton").prop("disabled", false);
    $(".grid_cell").unbind( "click" );
  }

  game.setBoardCallback(boardRendering);
  game.setResultCallback(resultRendering);
})
