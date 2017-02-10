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

// function to make sure multi ships don't overlap


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
  // $("#carrier").text("Carrier hits: " + var + " / 5") // TODO need var to pull in hits function
}
// function for making sure four block ship does not overlap another ship
function shipCheckFour(row, col, direction) {
  // if horizontal
  if (direction == 0 && col > 4) {
    return board[row][col] > 0 || board[row][col - 1] > 0 || board[row][col - 2] > 0 || board[row][col - 3] > 0;
  } else if (direction == 0 && col < 5) {
    return board[row][col] > 0 || board[row][col + 1] > 0 || board[row][col + 2] > 0 || board[row][col + 3] > 0;
    // if verticle
  } else if (direction == 1 && row > 4) {
    return board[row][col] > 0 || board[row - 1][col] > 0 || board[row - 2][col] > 0 || board[row - 3][col] > 0;
  } else if (direction == 1 && row < 5) {
    return board[row][col] > 0 || board[row + 1][col] > 0 || board[row + 2][col] > 0 || board[row + 3][col] > 0;
  }
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
  // while loop to determine whether or not a ship is already in position
  while (shipCheckFour(rowVal, colVal, vertOrHorz) == true) {
    vertOrHorz = Math.floor(Math.random() * 2);
    rowVal = Math.floor(Math.random() * boardRows);
    colVal = Math.floor(Math.random() * boardCols);
  }
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
  // $("#battleship").text("Battleship hits: " + var + " / 4") // TODO need var to pull in hits function
}

// function for making sure three block ship does not overlap another ship
function shipCheckThree(row, col, direction) {
  // if horizontal
  if (direction == 0 && col > 4) {
    return board[row][col] > 0 || board[row][col - 1] > 0 || board[row][col - 2] > 0;
  } else if (direction == 0 && col < 5) {
    return board[row][col] > 0 || board[row][col + 1] > 0 || board[row][col + 2] > 0;
    // if verticle
  } else if (direction == 1 && row > 4) {
    return board[row][col] > 0 || board[row - 1][col] > 0 || board[row - 2][col] > 0;
  } else if (direction == 1 && row < 5) {
    return board[row][col] > 0 || board[row + 1][col] > 0 || board[row + 2][col] > 0;
  }
}

var ship3 = 3

// function to place a 3 block ship
// TODO: NEED TO ADD SHIP CHECK FUNCTION TO THE 3 SHIP
function threeBlockPlacement() {
  var vertOrHorz = Math.floor(Math.random() * 2);
  // random placement for row
  var rowVal = Math.floor(Math.random() * boardRows);
  // random placement for column/cell
  var colVal = Math.floor(Math.random() * boardCols);
  // while loop to determine whether or not a ship is already in position
  while (shipCheckThree(rowVal, colVal, vertOrHorz) == true) {
    vertOrHorz = Math.floor(Math.random() * 2);
    rowVal = Math.floor(Math.random() * boardRows);
    colVal = Math.floor(Math.random() * boardCols);
  }
  if (vertOrHorz == 0 && colVal > 4) {
    board[rowVal][colVal] = ship3;
    board[rowVal][colVal - 1] = ship3;
    board[rowVal][colVal - 2] = ship3;
    $("#cell" + rowVal + colVal).addClass("ship3");
    $("#cell" + rowVal + (colVal - 1)).addClass("ship3");
    $("#cell" + rowVal + (colVal - 2)).addClass("ship3");
  } else if (vertOrHorz == 0 && colVal < 5) {
    board[rowVal][colVal] = ship3;
    board[rowVal][colVal + 1] = ship3;
    board[rowVal][colVal + 2] = ship3;
    $("#cell" + rowVal + colVal).addClass("ship3");
    $("#cell" + rowVal + (colVal + 1)).addClass("ship3");
    $("#cell" + rowVal + (colVal + 2)).addClass("ship3");
  } else if (vertOrHorz == 1 && rowVal > 4) {
    board[rowVal][colVal] = ship3;
    board[rowVal - 1][colVal] = ship3;
    board[rowVal - 2][colVal] = ship3;
    $("#cell" + rowVal + colVal).addClass("ship3");
    $("#cell" + (rowVal - 1) + colVal).addClass("ship3");
    $("#cell" + (rowVal - 2) + colVal).addClass("ship3");
  } else if (vertOrHorz == 1 && rowVal < 5) {
    board[rowVal][colVal] = ship3;
    board[rowVal + 1][colVal] = ship3;
    board[rowVal + 2][colVal] = ship3;
    $("#cell" + rowVal + colVal).addClass("ship3");
    $("#cell" + (rowVal + 1) + colVal).addClass("ship3");
    $("#cell" + (rowVal + 2) + colVal).addClass("ship3");
  };
  // $("#cruiser").text("Cruiser hits: " + var + " / 3") // TODO need var to pull in hits function
}

// function for making sure two block ship does not overlap another ship
function shipCheckTwo(row, col, direction) {
  // if horizontal
  if (direction == 0 && col > 4) {
    while (shipCheck(row, col) == true && shipCheck(row, col-1) == true) {
      direction = Math.floor(Math.random() * 2);
      row = Math.floor(Math.random() * boardRows);
      col = Math.floor(Math.random() * boardCols);
      shipCheckTwo(row, col, direction);
    };
    return board[row][col] > 0 || board[row][col - 1] > 0;
  } else if (direction == 0 && col < 5) {
    while (shipCheck(row, col) == true && shipCheck(row, col+1) == true) {
      direction = Math.floor(Math.random() * 2);
      row = Math.floor(Math.random() * boardRows);
      col = Math.floor(Math.random() * boardCols);
      shipCheckTwo(row, col, direction);
    };
    return board[row][col] > 0 || board[row][col + 1] > 0;
    // if verticle
  } else if (direction == 1 && row > 4) {
    while (shipCheck(row, col) == true && shipCheck(row-1, col) == true) {
      direction = Math.floor(Math.random() * 2);
      row = Math.floor(Math.random() * boardRows);
      col = Math.floor(Math.random() * boardCols);
      shipCheckTwo(row, col, direction);
    };
    return board[row][col] > 0 || board[row - 1][col] > 0;
  } else if (direction == 1 && row < 5) {
    while (shipCheck(row, col) == true && shipCheck(row+1, col) == true) {
      direction = Math.floor(Math.random() * 2);
      row = Math.floor(Math.random() * boardRows);
      col = Math.floor(Math.random() * boardCols);
      shipCheckTwo(row, col, direction);
    };
    return board[row][col] > 0 || board[row + 1][col] > 0;
  };
}
var ship2 = 2
// function to place a 2 block ship
// TODO: NEED TO ADD SHIP CHECK FUNCTION TO THE 3 SHIP
function twoBlockPlacement() {
  // random number to decide horizontal(0) or veritcal(1) direction of ship
  var vertOrHorz = Math.floor(Math.random() * 2);
  // random placement for row
  var rowVal = Math.floor(Math.random() * boardRows);
  // random placement for column/cell
  var colVal = Math.floor(Math.random() * boardCols);
  // while loop to determin whether or not a ship is already in position
  while (shipCheckTwo(rowVal, colVal, vertOrHorz) == true) {
    vertOrHorz = Math.floor(Math.random() * 2);
    rowVal = Math.floor(Math.random() * boardRows);
    colVal = Math.floor(Math.random() * boardCols);
  }
  // if statement for placing ship on board and identifying class for where a ship is.
  if (vertOrHorz == 0 && colVal > 4) {
    board[rowVal][colVal] = ship2;
    board[rowVal][colVal - 1] = ship2;
    $("#cell" + rowVal + colVal).addClass("ship2");
    $("#cell" + rowVal + (colVal - 1)).addClass("ship2");
  } else if (vertOrHorz == 0 && colVal < 5) {
    board[rowVal][colVal] = ship2;
    board[rowVal][colVal + 1] = ship2;
    $("#cell" + rowVal + colVal).addClass("ship2");
    $("#cell" + rowVal + (colVal + 1)).addClass("ship2");
  } else if (vertOrHorz == 1 && rowVal > 4) {
    board[rowVal][colVal] = ship2;
    board[rowVal - 1][colVal] = ship2;
    $("#cell" + rowVal + colVal).addClass("ship2");
    $("#cell" + (rowVal - 1) + colVal).addClass("ship2");
  } else if (vertOrHorz == 1 && rowVal < 5) {
    board[rowVal][colVal] = ship2;
    board[rowVal + 1][colVal] = ship2;
    $("#cell" + rowVal + colVal).addClass("ship2");
    $("#cell" + (rowVal + 1) + colVal).addClass("ship2");
  };
    // $("#destroyer").text("Destroyer hits: " + var + " / 2") // TODO need var to pull in hits function
}

// function to place one 1 block ship on the board
function oneBlockPlacement() {
  for (var a = 0; a < 1; a++) {
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
  // $("#submarine").text("Submarine hits: " + var + " / 1") // TODO need var to pull in hits function
}
// variables needed in the $(document).ready(function
var clickRow = 0;
var clickCol = 0;
var clickPosition;
var torpedoFires = 0;
var hits = 0;
var misses = 0;
var carrierHits = 0;
var battleshipHits = 0;
var cruiserHits = 0;
var destroyerHits = 0;
var submarineHits = 0;

// loads the functions we want to utilize once the page loads
$(document).ready(function() {
  // Need to build our table first
  buildTable();
  // placement of 5 block ship on board
  fiveBlockPlacement();
  // placement of two 4 block ships on board
  fourBlockPlacement();
  // fourBlockPlacement();
  // placement of two 3 block ships on board
  threeBlockPlacement();
  // threeBlockPlacement();
  // placement of two 2 block ships on board
  twoBlockPlacement();
  // twoBlockPlacement();
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
    if (board[clickRow][clickCol] == 5) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
      carrierHits++;
      $("#carrierHits").text(carrierHits);
    } else if (board[clickRow][clickCol] == 4) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
      battleshipHits++;
      $("#battleshipHits").text(battleshipHits);
    } else if (board[clickRow][clickCol] == 3) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
      cruiserHits++;
      $("#cruiserHits").text(cruiserHits);
    } else if (board[clickRow][clickCol] == 2) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
      destroyerHits++;
      $("#destroyerHits").text(destroyerHits);
    } else if (board[clickRow][clickCol] == 1) {
      console.log("HIT!");
      $(this).addClass("cellHit");
      hits++;
      $("#hitCounter").text(hits);
      submarineHits++;
      $("#submarineHits").text(submarineHits);
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
    if (hits == 15 && torpedoFires < 25) {
      // Displays the win/loss status of the game
      $(".status").show();
      // Displays that the user has won
      $("#winLose").text("You Win!");
      // Prevents the user from being able to 'fire more torpedoes'.
      $(".cell").off("click");
    } else if (hits < 15 && torpedoFires == 25) {
      // Displays the win/loss status of the game
      $(".status").show();
      // Displays that the user has lost
      $("#winLose").text("You Lose.");
      // addes a class to the cells with ships so that the missed ships are displayed
      $(".ship").addClass("missedShip");
      $(".ship2").addClass("missedShip");
      $(".ship3").addClass("missedShip");
      $(".ship4").addClass("missedShip");
      $(".ship5").addClass("missedShip");
      // Prevents the user from being able to 'fire more torpedoes'.
      $(".cell").off("click");
    }
    // Prevents the game from letting a user fire a torpedo more than once on a cell.
    $(this).off("click");
  });
})
