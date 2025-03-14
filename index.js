document.addEventListener("DOMContentLoaded", () => {
  const scoreElement = document.getElementById("score");
  let currentScore = 0;

  let currentMode = "multiplication"; 
  let currentDifficulty = "easy"; 

  let correctAnswer = null;
  let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;
  let riddleAnswer = null;

  function updateScore(points) {
    currentScore += points;
    scoreElement.textContent = `Score: ${currentScore}`;
  }

  function getScoreForDifficulty(difficulty) {
    switch (difficulty) {
      case "easy": return 5;
      case "medium": return 10;
      case "hard": return 15;
      case "impossible": return 20;
      default: return 0;
    }
  }

  function generateRiddle() {
    const riddles = [
      { question: "What has keys but can't open locks?", answer: "piano", difficulty: "easy" },
      { question: "What runs but never walks?", answer: "river", difficulty: "easy" },
      { question: "What has a face and two hands but no arms or legs?", answer: "clock", difficulty: "easy" },
      { question: "What can you catch but not throw?", answer: "cold", difficulty: "medium" },
      { question: "What is always coming but never arrives?", answer: "tomorrow", difficulty: "medium" },
      { question: "What is greater than God, more evil than the devil, the poor have it, the rich need it, and if you eat it you will die?", answer: "nothing", difficulty: "hard" },
      { question: "What can be broken, but never held?", answer: "promise", difficulty: "hard" },
      { question: "What has a head, a tail, but no body?", answer: "coin", difficulty: "hard" },
      { question: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", answer: "pencil lead", difficulty: "impossible" },
      { question: "What is so fragile that saying its name breaks it?", answer: "silence", difficulty: "impossible" },
      { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo", difficulty: "impossible" },
      { question: "You measure my life in hours and I serve you by expiring. Im quick when Im thin and slow when Im fat. The wind is my enemy. What am I?", answer: "candle", difficulty: "impossible" },
      { question: "What has many keys but can't open locks?", answer: "piano", difficulty: "impossible" },
      { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "map", difficulty: "impossible" },
      { question: "What is seen in the middle of March and April that cant be seen at the beginning or end of either month?", answer: "r", difficulty: "impossible" },
    ];
    const riddleIndex = Math.floor(Math.random() * riddles.length);
    const riddle = riddles[riddleIndex];
    if (riddle.difficulty !== currentDifficulty) {
      generateRiddle();
      return;
    }
    document.getElementById("question").textContent = riddle.question;
    riddleAnswer = riddle.answer;
  }

 
  function generateQuestion() {
    if (currentMode === "riddles") {
      generateRiddle();
      return;
    }
    switch (currentMode) {
      case "multiplication":
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
        correctAnswer = num1 * num2;
        break;
      case "fractions":
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
            document.getElementById("question").textContent = `Solve for x: ${num1}x + ${num2} = ${num3}x + ${num4}sin(${num5}x)`; 
            return;
          default:
            break;
        }
        correctAnswer = Math.round(num1 / num2 * 100) / 100;
        break;
      case "decimals":
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
        correctAnswer = Math.random() < 0.5 ? Math.round((num1 + num2) * 100) / 100 : Math.round((num1 - num2) * 100) / 100;
        break;
      default:
        break;
    }
    
    document.getElementById("question").textContent = `What is ${num1} ${currentMode === "multiplication" ? "*" : currentMode === "fractions" ? "/" : currentMode === "decimals" ? (correctAnswer < num1 ? "-" : "+") : ""} ${num2}?`;
  }

  generateQuestion();

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswer = document.getElementById("input").value.trim();
    if (currentMode === "riddles") {
      if (userAnswer.toLowerCase() === riddleAnswer) {
        updateScore(getScoreForDifficulty(currentDifficulty));
      } else {
        alert(`Wrong answer! The correct answer was '${riddleAnswer}'.`);
      }
    } else {
      const numericAnswer = Number(userAnswer);
      if (Math.round(numericAnswer * 100) / 100 === correctAnswer) {
        updateScore(getScoreForDifficulty(currentDifficulty));
      } else {
        alert(`Wrong answer! The correct answer was ${correctAnswer}.`);
      }
    }
    document.getElementById("input").value = "";
    generateQuestion();
  });

  document.getElementById("reset").addEventListener("click", () => {
    currentScore = 0;
    scoreElement.textContent = "Score: 0";
    generateQuestion();
  });

  document.querySelectorAll(".mode").forEach(button => {
    button.addEventListener("click", (event) => {
      currentMode = event.target.id.split('-')[1];
      generateQuestion();
    });
  });

  document.querySelectorAll(".difficulty").forEach(button => {
    button.addEventListener("click", (event) => {
      currentDifficulty = event.target.id.split('-')[1];
      generateQuestion();
    });
  });
});

