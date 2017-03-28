$(document).ready(function(){
  var game = new TicTacToe();

  $(".choiceButton").click(function(){
    game.setPlayers($(this).data("player1"), $(this).data("player2"));
    $(".choiceButton").prop("disabled", true);
    $(".grid_cell").unbind( "click" );
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
    $(".choiceButton").prop("disabled", false);
  }

  game.setBoardCallback(boardRendering);
  game.setResultCallback(resultRendering);
})
