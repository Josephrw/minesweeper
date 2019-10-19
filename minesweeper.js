document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { 
  cells: [
  {row: 0, col: 0, isMine:false, hidden:true, isMarked: false},
  {row: 0, col: 1, isMine: false, hidden:true, isMarked: false},
  {row: 0, col: 2, isMine: true, hidden:true, isMarked: false},

  {row: 1, col: 0, isMine: false, hidden:true, isMarked: false},
  {row: 1, col: 1, isMine: true, hidden:true, isMarked: false},
  {row: 1, col: 2, isMine: false, hidden:true, isMarked: false},

  {row: 2, col: 0, isMine: false, hidden:true, isMarked: false},
  {row: 2, col: 1, isMine: true, hidden:true, isMarked: false},
  {row: 2, col: 2, isMine: false, hidden:true, isMarked: false},
]}


function startGame () {

  for (var i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

document.addEventListener("click", checkForWin)
document.addEventListener("contextmenu", checkForWin)


function checkForWin () {
  {
    for (i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return;
      } else if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return;
      }
    }
  lib.displayMessage('You win!')
}

}
function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++;
    }
  }
  return count;
}

