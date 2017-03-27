$(document).ready(function(){
  var game = new TicTacToe();

  $("#buttonX").click(function(){
    game.setPlayers("X", "O");
    $(".choiceButton").prop("disabled", true);
  });

  $("#buttonO").click(function(){
    game.setPlayers("O", "X");
    $(".choiceButton").prop("disabled", true);
  });

  $(".grid_cell").click(function(){
    game.setMove($(this).data("number"));
  });

  function boardRendering(board) {
    for (var i = 0; i < 9; i++) {
      $('.grid_cell[data-number="' + i + '"]').text(board[i]);
    }
  }

  function resultRendering(result) {
    if (result === null) {
      $("#game-field").append("<p>It was a draw</p>");
    } else if (result === "X") {
      $("#game-field").append("<p>X wins!!</p>");
    } else if (result === "O") {
      $("#game-field").append("<p>O wins!!</p>");
    }
  }

  game.setBoardCallback(boardRendering);
  game.setResultCallback(resultRendering);
})
