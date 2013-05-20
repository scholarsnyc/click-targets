// Put your code here.

$(document).ready(function () {
  
  var turn = 1;
  
  function getCurrentColor() {
    var players = ['red', 'blue'];
    var currentPlayer = players[turn % 2];
    turn = turn + 1;
    return currentPlayer;
  }
  
  $('.box').on('click', function () {
    $(this).css('backgroundColor', getCurrentColor());
  });
  
});