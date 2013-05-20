// Put your code here.

$(document).ready(function () {
  
  var turn = 1;
  
  function getCurrentColor() {
    var players = ['purple', 'blue'];
    var currentPlayer = players[turn % 2];
    turn++;
    return currentPlayer;
  }
  
  $('.box').on('click', function () {
    var $box = $(this);
    if ($box.css('backgroundColor') === "rgba(0, 0, 0, 0)") {
      $box.css('backgroundColor', getCurrentColor());
    }
  });
  
});