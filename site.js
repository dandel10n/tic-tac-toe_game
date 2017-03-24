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
})