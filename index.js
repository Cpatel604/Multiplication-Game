document.addEventListener("DOMContentLoaded", () => {
  // Get the score element and initialize the score to 0
  const scoreElement = document.getElementById("score");
  let currentScore = 0;

  // Set the default mode and difficulty
  let currentMode = "multiplication"; // Default mode
  let currentDifficulty = "easy"; // Default difficulty

  // Initialize variables for the question
  let correctAnswer = null;
  let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;

  // Function to update the score
  function updateScore(points) {
    // Add the points to the current score and update the score element
    currentScore += points;
    scoreElement.textContent = `Score: ${currentScore}`;
  }

  // Function to calculate score based on difficulty
  function getScoreForDifficulty(difficulty) {
    // Use a switch statement to return the score based on the difficulty
    switch (difficulty) {
      case "easy": return 5;
      case "medium": return 10;
      case "hard": return 15;
      case "impossible": return 20;
      default: return 0;
    }
  }

  // Function to generate a random question
  function generateQuestion() {
    // Use a switch statement to generate a question based on the mode
    switch (currentMode) {
      case "multiplication":
        // Generate numbers for the question based on the difficulty
        switch (currentDifficulty) {
          case "easy":
            num1 = Math.floor(Math.random() * 5) + 1;
            num2 = Math.floor(Math.random() * 5) + 1;
            break;
          case "medium":
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 40) + 1;
            break;
          case "hard":
            num1 = Math.floor(Math.random() * 60) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            break;
          case "impossible":
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            num3 = Math.floor(Math.random() * 10) + 1;
            num4 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = Math.round((num2 * num4 - num1 * num3) / (num1 * num4 - num2 * num3) * 100) / 100;
            document.getElementById("question").textContent = `Solve for x: ${num1}x + ${num2} = ${num3}x + ${num4}`;
            return;
          default:
            break;
        }
        // Calculate the correct answer for the question
        correctAnswer = num1 * num2;
        break;
      case "fractions":
        // Generate numbers for the question based on the difficulty
        switch (currentDifficulty) {
          case "easy":
            num1 = Math.floor(Math.random() * 5) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            break;
          case "medium":
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 40) + 1;
            break;
          case "hard":
            num1 = Math.floor(Math.random() * 60) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            break;
          case "impossible":
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
            num3 = Math.floor(Math.random() * 10) + 1;
            num4 = Math.floor(Math.random() * 10) + 1;
            num5 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = Math.round(Math.atan2(num4 * num5 - num2 * num3, num1 * num5 - num2 * num4) * 100) / 100;
            // These are partial Diffrential Equations Made Using AI since i have never even touched partial differential equations
            document.getElementById("question").textContent = `Solve for x: ${num1}x + ${num2} = ${num3}x + ${num4}sin(${num5}x)`; 
            return;
          default:
            break;
        }
        // Calculate the correct answer for the question
        correctAnswer = Math.round(num1 / num2 * 100) / 100;
        break;
      case "decimals":
        // Generate numbers for the question based on the difficulty
        switch (currentDifficulty) {
          case "easy":
            num1 = Math.floor(Math.random() * 200);
            num2 = Math.floor(Math.random() * 200);
            break;
          case "medium":
            num1 = Math.floor(Math.random() * 3000);
            num2 = Math.floor(Math.random() * 3000);
            break;
          case "hard":
            num1 = Math.floor(Math.random() * 90000);
            num2 = Math.floor(Math.random() * 40000);
            break;
          case "impossible":
            num1 = Math.floor(Math.random() * 10000);
            num2 = Math.floor(Math.random() * 10000);
            num3 = Math.floor(Math.random() * 100);
            num4 = Math.floor(Math.random() * 100);
            num5 = Math.floor(Math.random() * 100);
            correctAnswer = Math.round(Math.pow(num1 + num2 * num3 + num4 * num5, 1/3) * 100) / 100;
            document.getElementById("question").textContent = `Solve: ∂/∂x(${num1} + ${num2}y + ${num4}z) = ${num3}y + ${num5}z`;
            return;
          default:
            break;
        }
        // Calculate the correct answer for the question
        correctAnswer = Math.random() < 0.5 ? Math.round((num1 + num2) * 100) / 100 : Math.round((num1 - num2) * 100) / 100;
        break;
      default:
        break;
    }

    // Set the question text based on the mode and numbers
    document.getElementById("question").textContent = `What is ${num1} ${currentMode === "multiplication" ? "*" : currentMode === "fractions" ? "/" : currentMode === "decimals" ? (correctAnswer < num1 ? "-" : "+") : ""} ${num2}?`;
  }

  // Generate a question when the page first loads
  generateQuestion();

  // Event listener for submit button
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Get the user's answer and check if it's correct
    const userAnswer = Number(document.getElementById("input").value);
    if (Math.round(userAnswer * 100) / 100 === correctAnswer) {
      // Update the score and generate a new question
      updateScore(getScoreForDifficulty(currentDifficulty));
    } else {
      // Alert the user if they got the question wrong
      alert(`Wrong answer! The correct answer was ${correctAnswer}.`);
    }
    // Clear the input field and generate a new question
    document.getElementById("input").value = "";
    generateQuestion();
  });

  // Event listener for reset button
  document.getElementById("reset").addEventListener("click", () => {
    // Reset the score and generate a new question
    currentScore = 0;
    scoreElement.textContent = "Score: 0";
    generateQuestion();
  });

  // Event listeners for mode buttons
  document.querySelectorAll(".mode").forEach(button => {
    button.addEventListener("click", (event) => {
      // Update the mode and generate a new question
      currentMode = event.target.id.split('-')[1];
      generateQuestion();
    });
  });

  // Event listeners for difficulty buttons
  document.querySelectorAll(".difficulty").forEach(button => {
    button.addEventListener("click", (event) => {
      // Update the difficulty and generate a new question
      currentDifficulty = event.target.id.split('-')[1];
      generateQuestion();
    });
  });
});
