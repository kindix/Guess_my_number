"use strict";

/*
document.querySelector(".message").textContent = "Hello World";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 40;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 12;
*/

let secter_number = Math.trunc(Math.random() * 20) + 1;
//
let high_score = 0;
let score = 20;
function display_message(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    ddisplay_message("👀 No number");

    //when player wins
  } else if (guess === secter_number) {
    display_message("👍 Correct number");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secter_number;
    document.querySelector("h1").textContent = "Congratulation!!";

    if (high_score < score) {
      high_score = score;
      document.querySelector(".highscore").textContent = high_score;
    }
  } else if (guess !== secter_number) {
    if (score > 1) {
      display_message(
        guess > secter_number ? "🤢 To high number" : "🤷‍♀️ To low number"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      display_message("🤣 You are LOSER");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // window.location.reload();
  secter_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  display_message("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector("h1").textContent = "Guess My Number!";
});
