
// var Board = [[],[],[]]

// var Board = {
//   row1: ["x"],
//   row2: ["x"],
//   row3: ["x"]
// }

function allGames() {
  this.board = []
}
player1 = {
  marker : "x"
}

player2 = {
  marker : "O"
}
allGames.prototype.addSpace = function(Space) {
  this.board.push(Space);
}


function Space (xCoord, yCoord, markedBy) {
  this.xCoord = xCoord,
  this.yCoord = yCoord,
  this.markedBy = markedBy
}

var allGames = new allGames();




$(document).ready(function() {




  $("#A1-input").click(function() {
  event.preventDefault();
  var inputtedxCoord = "a"
  var inputtedyCoord = "1"
  var inputtedmarkedBy = player1.marker;
  var newSpace = new Space (inputtedxCoord, inputtedyCoord, inputtedmarkedBy);
  allGames.addSpace(newSpace);
  $("#A1-output").text("X");
  console.log(allGames.board)

});
});