$(document).ready(function(){
  var game = new TicTacToe();

  $(".choiceButton").click(function(){
    game.setPlayers($(this).data("player1"), $(this).data("player2"));
    $(".choiceButton").prop("disabled", true);
    $(".winner").remove();

    $(".grid_cell").click(function(){
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
    this.cleanTheBoard();
    $(".choiceButton").prop("disabled", false);
  }

  game.setBoardCallback(boardRendering);
  game.setResultCallback(resultRendering);
})
