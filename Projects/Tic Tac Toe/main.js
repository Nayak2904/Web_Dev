let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");

let currentPlayer = "X";
let gameOver = false;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    if (!gameOver && squares[i].innerHTML === "") {
      squares[i].innerHTML = currentPlayer;
      checkForWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
}

function checkForWin() {
  if (
    checkRow(0, 1, 2) || checkRow(3, 4, 5) || checkRow(6, 7, 8) ||
    checkRow(0, 3, 6) || checkRow(1, 4, 7) || checkRow(2, 5, 8) ||
    checkRow(0, 4, 8) || checkRow(2, 4, 6)
  ) {
    alert(currentPlayer + " wins!");
    gameOver = true;
  }
}

function checkRow(a, b, c) {
  return (
    squares[a].innerHTML === currentPlayer &&
    squares[b].innerHTML === currentPlayer &&
    squares[c].innerHTML === currentPlayer
  );
}

resetButton.addEventListener("click", function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  currentPlayer = "X";
  gameOver = false;
});
