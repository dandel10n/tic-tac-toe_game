$(document).ready(function(){
  var game = new TicTacToe();

  $(".chooseGameButton").click(function() {
    game.setMultiplayerGame($(this).data("multiplayer"));
    $(".XOChoice").addClass("active");
  });

  $(".chooseXOButton").click(function(){
    game.setPlayers($(this).data("player1"), $(this).data("player2"));
    $(".chooseXOButton").prop("disabled", true);
    $(".chooseGameButton").prop("disabled", true);
    $(".resetTheGame").addClass("active");
    allowClick();
  });

  $(".resetButton").click(function(){
    forbidClick();
    $(".XOChoice").removeClass("active");
    $(".resetTheGame").removeClass("active");
    $(".chooseGameButton").prop("disabled", false);
    $(".chooseXOButton").prop("disabled", false);
    $(".winner").text("");
    game.cleanTheBoard();
  });

  function boardRendering(board) {
    for (var i = 0; i < 9; i++) {
      $('.grid_cell[data-number="' + i + '"]').text(board[i]);
    }
  }

  function resultRendering(result) {
    if (result === null) {
      $(".winner").text("It was a draw");
    } else {
      $(".winner").text(result + " wins!");
    }
    forbidClick();
    setTimeout(function() {
      game.cleanTheBoard();
      $(".winner").text("");
      allowClick();
    }, 2000);
  }

  function forbidClick() {
    $(".grid_cell").unbind( "click" );
  }

  function allowClick() {
    $(".grid_cell").bind("click", function(){
      game.setMove($(this).data("number"));
    });
  }

  game.setBoardCallback(boardRendering);
  game.setResultCallback(resultRendering);
})
