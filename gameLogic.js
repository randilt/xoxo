const winning_combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]; // all the winning possibilities

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
  document.getElementById("reset").addEventListener("click", () => {
    // adding event listener to reset button
    for (let i = 1; i <= 9; i++) {
      // resetting all the squares
      document.getElementById("s" + i).innerHTML = "";
      document.getElementById("s" + i).classList.remove("active-x");
      document.getElementById("s" + i).classList.remove("active-o");
    }
    document.querySelector(".win-message").innerHTML = "";
    document.querySelector(".current").innerHTML =
      "Player 1's Chance <span>(X)</span>";
    count = 0;
    squares.forEach((square) => {
      // adding event listener to all the squares
      square.addEventListener("click", handleClick);
    });
  });
});
let count = 0;

handleClick = (event) => {
  let current = document.querySelector(".current");
  let square = document.getElementById(event.target.id); // getting the id of the square clicked
  if (count % 2 == 0) {
    // checking if it is player 1's turn or player 2's turn
    current.innerHTML = "Player 2's Chance <span>(O)</span>";
    square.classList.add("active-x");
    square.innerHTML = "X";
    square.removeEventListener("click", handleClick);
  } else {
    current.innerHTML = "Player 1's Chance <span>(X)</span>";
    square.classList.add("active-o");

    square.innerHTML = "O";
    square.removeEventListener("click", handleClick);
  }
  count++;
  let win = document.querySelector(".win-message");
  const disableSquares = () => {
    for (let i = 1; i <= 9; i++) {
      // removing event listener from all the squares when win condition is met
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
  };
  const checkWin = (letter) => {
    // function checking if any of the winning combinations are satisfied
    for (let i = 0; i < winning_combinations.length; i++) {
      if (
        document.getElementById("s" + winning_combinations[i][0]).innerHTML ==
          letter &&
        document.getElementById("s" + winning_combinations[i][1]).innerHTML ==
          letter &&
        document.getElementById("s" + winning_combinations[i][2]).innerHTML ==
          letter
      ) {
        win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
        disableSquares();
      }
    }
  };
  checkWin("X"); // checking if player 1 has won
  checkWin("O"); // checking if player 2 has won
};
