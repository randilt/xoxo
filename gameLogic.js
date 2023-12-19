const winning_combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
let count = 0;

console.log(winning_combinations[1]);

handleClick = (event) => {
  const isGameOver = true;
  let current = document.querySelector(".current");
  let square = document.getElementById(event.target.id);
  if (count % 2 == 0) {
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
  // All PLAYER X WINNING CONDITIONS
  if (
    (document.getElementById("s1").innerHTML == "X") &
    (document.getElementById("s2").innerHTML == "X") &
    (document.getElementById("s3").innerHTML == "X")
  ) {
    // Refresh the page

    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
  }
  if (
    (document.getElementById("s4").innerHTML == "X") &
    (document.getElementById("s5").innerHTML == "X") &
    (document.getElementById("s6").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s7").innerHTML == "X") &
    (document.getElementById("s8").innerHTML == "X") &
    (document.getElementById("s9").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s1").innerHTML == "X") &
    (document.getElementById("s4").innerHTML == "X") &
    (document.getElementById("s7").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s2").innerHTML == "X") &
    (document.getElementById("s5").innerHTML == "X") &
    (document.getElementById("s8").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s3").innerHTML == "X") &
    (document.getElementById("s6").innerHTML == "X") &
    (document.getElementById("s9").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s1").innerHTML == "X") &
    (document.getElementById("s5").innerHTML == "X") &
    (document.getElementById("s9").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s3").innerHTML == "X") &
    (document.getElementById("s5").innerHTML == "X") &
    (document.getElementById("s7").innerHTML == "X")
  ) {
    win.innerHTML = "Game Over! <span>Player 1 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  // ALL PLAYER O WINNING CONDITIONS
  if (
    (document.getElementById("s1").innerHTML == "O") &
    (document.getElementById("s2").innerHTML == "O") &
    (document.getElementById("s3").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s4").innerHTML == "O") &
    (document.getElementById("s5").innerHTML == "O") &
    (document.getElementById("s6").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s7").innerHTML == "O") &
    (document.getElementById("s8").innerHTML == "O") &
    (document.getElementById("s9").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s1").innerHTML == "O") &
    (document.getElementById("s4").innerHTML == "O") &
    (document.getElementById("s7").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s2").innerHTML == "O") &
    (document.getElementById("s5").innerHTML == "O") &
    (document.getElementById("s8").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s3").innerHTML == "O") &
    (document.getElementById("s6").innerHTML == "O") &
    (document.getElementById("s9").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s1").innerHTML == "O") &
    (document.getElementById("s5").innerHTML == "O") &
    (document.getElementById("s9").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
  if (
    (document.getElementById("s3").innerHTML == "O") &
    (document.getElementById("s5").innerHTML == "O") &
    (document.getElementById("s7").innerHTML == "O")
  ) {
    win.innerHTML = "Game Over! <span>Player 2 wins!!!</span>";
    for (let i = 1; i <= 9; i++) {
      document
        .getElementById("s" + i)
        .removeEventListener("click", handleClick);
    }
    // Refresh the page
  }
};