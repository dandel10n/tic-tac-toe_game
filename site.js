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
    switch ($(this).prop("id")) {
      case "0":
        console.log('Pressed sell #1');
        break;
      case "1":
        console.log('Pressed sell #2');
        break;
      case "2":
        console.log('Pressed sell #3');
        break;
      case "3":
        console.log('Pressed sell #4');
        break;
      case "4":
        console.log('Pressed sell #5');
        break;
      case "5":
        console.log('Pressed sell #6');
        break;
      case "6":
        console.log('Pressed sell #7');
        break;
      case "7":
        console.log('Pressed sell #8');
        break;
      case "8":
        console.log('Pressed sell #9');
        break;
    }
  })
})