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

// Brute force array creation
// var board = [[0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0]];

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

function shipCheck(x, y) {
  // middle board condition
  if (x > 0 && x < 9 && y > 0 && y < 9) {
    return board[x][y] == ship || board[x-1][y-1] == ship || board[x-1][y] == ship || board[x-1][y+1] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x+1][y-1] == ship || board[x+1][y] == ship || board[x+1][y+1] == ship;
    // top row (non corners) condition
  } else if (x == 0 && y > 0 && y < 9) {
    return board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x+1][y] == ship || board[x+1][y-1] == ship || board[x+1][y+1] == ship;
    // bottom row (non corners) condition
  } else if (x == 9 && y > 0 && y < 9) {
    return board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x-1][y] == ship || board[x-1][y-1] == ship || board[x-1][y+1] == ship;
    // left edge (non corners) condition
  } else if (x > 0 && x < 9 && y == 0) {
    return board[x][y] == ship || board[x-1][y] == ship || board[x+1][y] == ship || board[x-1][y+1] == ship || board[x][y+1] == ship || board[x+1][y+1] == ship;
    // right edge (non corners) condition
  } else if (x > 0 && x < 9 && y == 9) {
    return board[x][y] == ship || board[x-1][y] == ship || board[x+1][y] == ship || board[x-1][y-1] == ship || board[x][y-1] == ship || board[x+1][y-1] == ship;
    // upper left corner
  } else if (x == 0 && y == 0) {
    return board[x][y] == ship || board[x][y+1] == ship || board[x+1][y] == ship || board[x+1][y+1] == ship;
    // upper right corner
  } else if (x == 0 && y == 9) {
    return board[x][y] == ship || board[x][y-1] == ship || board[x+1][y-1] == ship || board[x+1][y] == ship;
    // bottom left corner
  } else if (x == 9 && y == 0) {
    return board[x][y] == ship || board[x-1][y] == ship || board[x-1][y+1] == ship || board[x][y+1] == ship;
    // bottom right corner
  } else if (x == 9 && y == 9) {
    return board[x][y] == ship || board[x][y-1] == ship || board[x-1][y-1] == ship || board[x-1][y] == ship;
  };
}
// function to place 5 ships on the board
function shipPlacement() {
  for (var a = 0; a < 5; a++) {
    // random placement for row
    var rowVal = Math.floor(Math.random() * boardRows);
    // random placement for column/cell
    var colVal = Math.floor(Math.random() * boardCols);
    // while loop to ense that a ship is no placed in duplicate positions
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
// function shipPlacement() {
//   for (var a = 0; a < 5; a++) {
//     // random placement for row
//     var x = Math.floor(Math.random() * boardRows);
//     // random placement for column/cell
//     var y = Math.floor(Math.random() * boardCols);
//     // while loop to ense that a ship is no placed in duplicate positions
//     while (board[x][y] == ship) {
//       x = Math.floor(Math.random() * boardRows);
//       y = Math.floor(Math.random() * boardCols);
//     };
//     // placement of ship on board
//     board[x][y] = ship;
//     // Adds a class to the ship location
//     $("#cell" + x + y).addClass("ship");
//     // logs the ship location on the console for our reference. WILL REMOVE AT END.
//     console.log("Ship #" + (a + 1) + " - row: " + x + "  col: " + y);
//   };
// }

// function shipPlacement() {
//   for (var a = 0; a < 5; a++) {
//       // random placement for row
//       var x = Math.floor(Math.random() * boardRows);
//       console.log(a + ": " + x);
//       // random placement for column/cell
//       var y = Math.floor(Math.random() * boardCols);
//       console.log(a + ": " + y);
//       // board[x][y] = ship;
//       // while loop to ensure that a ship is no placed in duplicate positions
//       // x - 1 < 0 &&
//       // y - 1 < 0 &&
//       // x + 1 > 9 &&
//       // y + 1 > 9 &&
//       if (x > 0 && x < 9 && y > 0 && y < 9) {
//         while (
//           // x > 0 && x < 9 && y > 0 && y < 9 &&
//         board[x][y] == ship ||
//         board[x-1][y-1] == ship ||
//         board[x-1][y] == ship ||
//         board[x-1][y+1] == ship ||
//         board[x][y-1] == ship ||
//         board[x][y+1] == ship ||
//         board[x+1][y-1] == ship ||
//         board[x+1][y] == ship ||
//         board[x+1][y+1] == ship) {
//           x = Math.floor(Math.random() * boardRows);
//           y = Math.floor(Math.random() * boardCols);
//         };
//         if (x == 0 && y > 0 && y < 9) {
//           while (board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x+1][y] == ship || board[x+1][y-1] == ship || board[x+1][y+1] == ship) {
//           x = Math.floor(Math.random() * boardRows);
//           y = Math.floor(Math.random() * boardCols);
//           };
//           if (x == 9 && y > 0 && y < 9) {
//             while (board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x-1][y] == ship || board[x-1][y-1] == ship || board[x-1][y+1] == ship) {
//               x = Math.floor(Math.random() * boardRows);
//               y = Math.floor(Math.random() * boardCols);
//             };
//             if (x > 0 && x < 9 && y == 0) {
//               while (board[x][y] == ship || board[x-1][y] == ship || board[x+1][y] == ship || board[x-1][y+1] == ship || board[x][y+1] == ship || board[x+1][y+1] == ship) {
//                 x = Math.floor(Math.random() * boardRows);
//                 y = Math.floor(Math.random() * boardCols);
//               };
//             };
//           };
//         };
//       }
// // //       // } else if (x == 0 && y > 0 && y < 9) {
// //       //   while (x == 0 && y > 0 && y < 9 && board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x+1][y] == ship || board[x+1][y-1] == ship || board[x+1][y+1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x == 9 && y > 0 && y < 9) {
// //       //   while (x == 9 && y > 0 && y < 9 && board[x][y] == ship || board[x][y-1] == ship || board[x][y+1] == ship || board[x-1][y] == ship || board[x-1][y-1] == ship || board[x-1][y+1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x > 0 && x < 9 && y == 0) {
// //       //   while (x > 0 && x < 9 && y == 0 && board[x][y] == ship || board[x-1][y] == ship || board[x+1][y] == ship || board[x-1][y+1] == ship || board[x][y+1] == ship || board[x+1][y+1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x > 0 && x < 9 && y == 9) {
// //       //   while (x > 0 && x < 9 && y == 9 && board[x][y] == ship || board[x-1][y] == ship || board[x+1][y] == ship || board[x-1][y-1] == ship || board[x][y-1] == ship || board[x+1][y-1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x == 0 && y == 0) {
// //       //   while (x == 0 && y == 0 && board[x][y] == ship || board[x][y+1] == ship || board[x+1][y] == ship || board[x+1][y+1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x == 0 && y == 9) {
// //       //   while (x == 0 && y == 9 && board[x][y] == ship || board[x][y-1] == ship || board[x+1][y-1] == ship || board[x+1][y] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x == 9 && y == 9) {
// //       //   while (x == 9 && y == 9 && board[x][y] == ship || board[x][y-1] == ship || board[x-1][y-1] == ship || board[x-1][y] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
// //       // // } else if (x == 9 && y == 0) {
// //       //   while (x == 9 && y == 0 && board[x][y] == ship || board[x-1][y] == ship || board[x-1][y+1] == ship || board[x][y+1] == ship) {
// //       //     x = Math.floor(Math.random() * boardRows);
// //       //     y = Math.floor(Math.random() * boardCols);
// //       //   };
//     // placement of ship on board
//     board[x][y] = ship;
//     // Adds a class to the ship location
//     $("#cell" + x + y).addClass("ship");
//     // logs the ship location on the console for our reference. WILL REMOVE AT END.
//     console.log("Ship #" + (a + 1) + " - row: " + x + "  col: " + y);
//   };
// }
//

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
  // placement of ships on the board
  shipPlacement();
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
    if (board[clickRow][clickCol] == 1) {
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
    if (hits == 5 && torpedoFires < 25) {
      // Displays the win/loss status of the game
      $(".status").show();
      // Displays that the user has won
      $("#winLose").text("You Win!");
      // Prevents the user from being able to 'fire more torpedoes'.
      $(".cell").off("click");
    } else if (hits < 5 && torpedoFires == 25) {
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
