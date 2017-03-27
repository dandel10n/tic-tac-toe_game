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

  game.setBoardCallback(boardRendering);
})

