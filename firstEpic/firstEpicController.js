function buildTable() {
// define the number of squares
  var currentRow = 1
  var currentCell = 1
// create a counter
  for (var i = 0; i < 10; i++) {
    $("table").append("<tr class='row' id='row" + currentRow + "'></tr>");
    for (var index = 0; index < 10; index++) {
      $("#row" + currentRow).append("<td class='cell' id='cell" + currentCell + "'></td>");
      currentCell++;
    };
    currentRow++;
  };
};

$(document).ready(function() {
  buildTable();
})
