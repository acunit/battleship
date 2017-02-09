// define function to create board
function buildTable() {
  // first for loop to create a row
  for (var row = 0; row < 10; row++) {
    $("table").append("<tr class='row' id='row" + row + "' data-index='" + row + "''></tr>");
    // set for loop to create 10 cells in each row
    for (var col = 0; col < 10; col++) {
      $("#row" + row).append("<td class='cell' id='cell" + row + col  + "' data-index='" + row + col + "'></td>");
    };
  };
};
var boardRows = 10;
var boardCols = 10;
// Intelligent array creation for 2D arrays
var board = [];
var tempArray = [];
for (var r = 0; r < boardRows; r++) {
  for (var c = 0; c < boardCols; c++) {
    tempArray.push(0);
  }
  board.push(tempArray);
  tempArray = [];
}
// variable to place value inside array for ship position
var ship = 1;
// function to check around around ship placement for another ship
function shipCheck(x, y) {
  // middle board condition
  if (x > 0 && x < 9 && y > 0 && y < 9) {
    return board[x][y] > 0 || board[x-1][y-1] > 0 || board[x-1][y] > 0 || board[x-1][y+1] > 0 || board[x][y-1] > 0 || board[x][y+1] > 0 || board[x+1][y-1] > 0 || board[x+1][y] > 0 || board[x+1][y+1] > 0;
    // top row (non corners) condition
  } else if (x == 0 && y > 0 && y < 9) {
    return board[x][y] > 0 || board[x][y-1] > 0 || board[x][y+1] > 0 || board[x+1][y] > 0 || board[x+1][y-1] > 0 || board[x+1][y+1] > 0;
    // bottom row (non corners) condition
  } else if (x == 9 && y > 0 && y < 9) {
    return board[x][y] > 0 || board[x][y-1] > 0 || board[x][y+1] > 0 || board[x-1][y] > 0 || board[x-1][y-1] > 0 || board[x-1][y+1] > 0;
    // left edge (non corners) condition
  } else if (x > 0 && x < 9 && y == 0) {
    return board[x][y] > 0 || board[x-1][y] > 0 || board[x+1][y] > 0 || board[x-1][y+1] > 0 || board[x][y+1] > 0 || board[x+1][y+1] > 0;
    // right edge (non corners) condition
  } else if (x > 0 && x < 9 && y == 9) {
    return board[x][y] > 0 || board[x-1][y] > 0 || board[x+1][y] > 0 || board[x-1][y-1] > 0 || board[x][y-1] > 0 || board[x+1][y-1] > 0;
    // upper left corner
  } else if (x == 0 && y == 0) {
    return board[x][y] > 0 || board[x][y+1] > 0 || board[x+1][y] > 0 || board[x+1][y+1] > 0;
    // upper right corner
  } else if (x == 0 && y == 9) {
    return board[x][y] > 0 || board[x][y-1] > 0 || board[x+1][y-1] > 0 || board[x+1][y] > 0;
    // bottom left corner
  } else if (x == 9 && y == 0) {
    return board[x][y] > 0 || board[x-1][y] > 0 || board[x-1][y+1] > 0 || board[x][y+1] > 0;
    // bottom right corner
  } else if (x == 9 && y == 9) {
    return board[x][y] > 0 || board[x][y-1] > 0 || board[x-1][y-1] > 0 || board[x-1][y] > 0;
  };
}

var ship5 = 5;

function fiveBlockPlacement() {
  var vertOrHorz = Math.floor(Math.random() * 2);
  // random placement for row
  var rowVal = Math.floor(Math.random() * boardRows);
  // random placement for column/cell
  var colVal = Math.floor(Math.random() * boardCols);
  if (vertOrHorz == 0 && colVal > 4) {
    board[rowVal][colVal] = ship5;
    board[rowVal][colVal - 1] = ship5;
    board[rowVal][colVal - 2] = ship5;
    board[rowVal][colVal - 3] = ship5;
    board[rowVal][colVal - 4] = ship5;
    $("#cell" + rowVal + colVal).addClass("ship5");
    $("#cell" + rowVal + (colVal - 1)).addClass("ship5");
    $("#cell" + rowVal + (colVal - 2)).addClass("ship5");
    $("#cell" + rowVal + (colVal - 3)).addClass("ship5");
    $("#cell" + rowVal + (colVal - 4)).addClass("ship5");
  } else if (vertOrHorz == 0 && colVal < 5) {
    board[rowVal][colVal] = ship5;
    board[rowVal][colVal + 1] = ship5;
    board[rowVal][colVal + 2] = ship5;
    board[rowVal][colVal + 3] = ship5;
    board[rowVal][colVal + 4] = ship5;
    $("#cell" + rowVal + colVal).addClass("ship5");
    $("#cell" + rowVal + (colVal + 1)).addClass("ship5");
    $("#cell" + rowVal + (colVal + 2)).addClass("ship5");
    $("#cell" + rowVal + (colVal + 3)).addClass("ship5");
    $("#cell" + rowVal + (colVal + 4)).addClass("ship5");
  } else if (vertOrHorz == 1 && rowVal > 4) {
    board[rowVal][colVal] = ship5;
    board[rowVal - 1][colVal] = ship5;
    board[rowVal - 2][colVal] = ship5;
    board[rowVal - 3][colVal] = ship5;
    board[rowVal - 4][colVal] = ship5;
    $("#cell" + rowVal + colVal).addClass("ship5");
    $("#cell" + (rowVal - 1) + colVal).addClass("ship5");
    $("#cell" + (rowVal - 2) + colVal).addClass("ship5");
    $("#cell" + (rowVal - 3) + colVal).addClass("ship5");
    $("#cell" + (rowVal - 4) + colVal).addClass("ship5");
  } else if (vertOrHorz == 1 && rowVal < 5) {
    board[rowVal][colVal] = ship5;
    board[rowVal + 1][colVal] = ship5;
    board[rowVal + 2][colVal] = ship5;
    board[rowVal + 3][colVal] = ship5;
    board[rowVal + 4][colVal] = ship5;
    $("#cell" + rowVal + colVal).addClass("ship5");
    $("#cell" + (rowVal + 1) + colVal).addClass("ship5");
    $("#cell" + (rowVal + 2) + colVal).addClass("ship5");
    $("#cell" + (rowVal + 3) + colVal).addClass("ship5");
    $("#cell" + (rowVal + 4) + colVal).addClass("ship5");
  };
}

var ship4 = 4;
// function to place a verticle 4 block ship
// TODO: NEED TO ADD SHIP CHECK FUNCTION TO THE 4 SHIP
function fourBlockPlacement() {
  var vertOrHorz = Math.floor(Math.random() * 2);
  // random placement for row
  var rowVal = Math.floor(Math.random() * boardRows);
  // random placement for column/cell
  var colVal = Math.floor(Math.random() * boardCols);
  if (vertOrHorz == 0 && colVal > 4) {
    board[rowVal][colVal] = ship4;
    board[rowVal][colVal - 1] = ship4;
    board[rowVal][colVal - 2] = ship4;
    board[rowVal][colVal - 3] = ship4;
    $("#cell" + rowVal + colVal).addClass("ship4");
    $("#cell" + rowVal + (colVal - 1)).addClass("ship4");
    $("#cell" + rowVal + (colVal - 2)).addClass("ship4");
    $("#cell" + rowVal + (colVal - 3)).addClass("ship4");
  } else if (vertOrHorz == 0 && colVal < 5) {
    board[rowVal][colVal] = ship4;
    board[rowVal][colVal + 1] = ship4;
    board[rowVal][colVal + 2] = ship4;
    board[rowVal][colVal + 3] = ship4;
    $("#cell" + rowVal + colVal).addClass("ship4");
    $("#cell" + rowVal + (colVal + 1)).addClass("ship4");
    $("#cell" + rowVal + (colVal + 2)).addClass("ship4");
    $("#cell" + rowVal + (colVal + 3)).addClass("ship4");
  } else if (vertOrHorz == 1 && rowVal > 4) {
    board[rowVal][colVal] = ship4;
    board[rowVal - 1][colVal] = ship4;
    board[rowVal - 2][colVal] = ship4;
    board[rowVal - 3][colVal] = ship4;
    $("#cell" + rowVal + colVal).addClass("ship4");
    $("#cell" + (rowVal - 1) + colVal).addClass("ship4");
    $("#cell" + (rowVal - 2) + colVal).addClass("ship4");
    $("#cell" + (rowVal - 3) + colVal).addClass("ship4");
  } else if (vertOrHorz == 1 && rowVal < 5) {
    board[rowVal][colVal] = ship4;
    board[rowVal + 1][colVal] = ship4;
    board[rowVal + 2][colVal] = ship4;
    board[rowVal + 3][colVal] = ship4;
    $("#cell" + rowVal + colVal).addClass("ship4");
    $("#cell" + (rowVal + 1) + colVal).addClass("ship4");
    $("#cell" + (rowVal + 2) + colVal).addClass("ship4");
    $("#cell" + (rowVal + 3) + colVal).addClass("ship4");
  };
}



// function to place one 1 block ship on the board
function oneBlockPlacement() {
  for (var a = 0; a < 5; a++) {
    // random placement for row
    var rowVal = Math.floor(Math.random() * boardRows);
    // random placement for column/cell
    var colVal = Math.floor(Math.random() * boardCols);
    // while loop to ensure that a ship is not placed in duplicate positions
    while (shipCheck(rowVal, colVal) == true) {
      rowVal = Math.floor(Math.random() * boardRows);
      colVal = Math.floor(Math.random() * boardCols);
    };
    // placement of ship on board
    board[rowVal][colVal] = ship;
    // Adds a class to the ship location
    $("#cell" + rowVal + colVal).addClass("ship");
    // logs the ship location on the console for our reference. WILL REMOVE AT END.
    console.log("Ship #" + (a + 1) + " - row: " + rowVal + "  col: " + colVal);
  };
}
// variables needed in the $(document).ready(function
var clickRow = 0;
var clickCol = 0;
var clickPosition;
var torpedoFires = 0;
var hits = 0;
var misses = 0;
// loads the functions we want to utilize once the page loads
$(document).ready(function() {
  // Need to build our table first
  buildTable();
  // placement of 5 block ship on board
  fiveBlockPlacement();
  // placement of two 4 block ships on board
  fourBlockPlacement();
  // placement of two 3 block ships on board

  // placement of two 2 block ships on board

  // placement of 1 block ship on the board
  oneBlockPlacement();
  // click function to determine a hit or a miss, and identify whether a cell was clicked.
  $(".cell").on("click", function() {
    // takes the data-index position from the cell that was clicked
    clickPosition = $(this).data("index");
    // converts the data-index position from an integer to a string
    var stringIndex = clickPosition.toString();
    // splits the two digit coded data-index into the row and column singular numbers
    var split = stringIndex.split("");
    // assigns the click row variable to the integer that correspondes with the row
    clickRow = parseInt(split[0]);
    // assigns the click column variable to the integer that correspondes with the column
    clickCol = parseInt(split[1]);
    // if statement to determine whether or not a ship position was hit or missed
    if (board[clickRow][clickCol] > 0) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
    } else {
      console.log("miss");
      misses++;
      $("#missCounter").text(misses);
      $(this).addClass("cellMiss");
    };
    // changes the color of a clicked cell
    // counts the number of torpedo shots
    torpedoFires++;
    // updates the user with how many shots they have fired.
    $("#shotCounter").text(torpedoFires + " / 25");
    // prevents a player from clicking on the same cell more than once and having it count.
    if (hits == 14 && torpedoFires < 25) {
      // Displays the win/loss status of the game
      $(".status").show();
      // Displays that the user has won
      $("#winLose").text("You Win!");
      // Prevents the user from being able to 'fire more torpedoes'.
      $(".cell").off("click");
    } else if (hits < 14 && torpedoFires == 25) {
      // Displays the win/loss status of the game
      $(".status").show();
      // Displays that the user has lost
      $("#winLose").text("You Lose.");
      // addes a class to the cells with ships so that the missed ships are displayed
      $(".ship").addClass("missedShip");
      // Prevents the user from being able to 'fire more torpedoes'.
      $(".cell").off("click");
    }
    // Prevents the game from letting a user fire a torpedo more than once on a cell.
    $(this).off("click");
  });
})
