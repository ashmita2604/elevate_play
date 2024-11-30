// Quiz Questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correct: 0,
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "10", "15"],
      correct: 1,
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 2,
    },
    {
      question: "What color do you get when you mix blue and yellow?",
      options: ["Green", "Purple", "Orange", "Red"],
      correct: 0,
    },
  ];
  
  // Quiz Variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM Elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  
  // Load Question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsEl.appendChild(button);
    });
  }
  
  // Check Answer
  function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Show Result
  function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = `You scored: ${score} / ${questions.length}`;
  }
  
  // Restart Quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
  }
  
  // Event Listeners
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    }
  });
  restartBtn.addEventListener("click", restartQuiz);
  
  // Initialize Quiz
  loadQuestion();
  