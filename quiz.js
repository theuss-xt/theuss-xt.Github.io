const questions = [
  {
    question: "Qual é a capital da França?",
    choices: ["Paris", "Londres", "Roma", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    question: "Qual é o maior mamífero?",
    choices: ["Elefante", "Baleia azul", "Girafa", "Hipopótamo"],
    correctAnswer: "Baleia azul"
  },
  {
    question: "Qual é o simbolo químico da água?",
    choices: ["H2O", "CO2", "NaCl", "O2"],
    correctAnswer: "H2O"
  },
  {
  question: "Qual é o maior animal marinho que ja existiu?",
    choices: ["Tubarão baleia", "Tubarão branco", "Baleia azul", "Tubarão tigre"],
    correctAnswer: "Baleia azul"
  },
  {
    question: "Qual é a raiz quadrada de 256?",
      choices: ["12", "16", "9", "20"],
      correctAnswer: "16"
    },
    {
      question: "Quem criou a lampada?",
        choices: ["Albert Einstein", "Thomas Edison ", "Elon Musk","Nicolas Tesla"],
        correctAnswer: "Nicolas Tesla"
      },
      {
        question: "Qual o maior planeta do sistema solar?",
          choices: ["Júpiter", "Plutão", "Sol", "Saturno"],
          correctAnswer: "Júpiter"
        },
        {
          question: "Qual é o salário mínimo do Brasil?",
            choices: ["2.150", "1.353", "1.412", "1.800"],
            correctAnswer: "1.412"
          },
          {
            question: "Em que país o futebol foi criado?",
              choices: ["Inglaterra", "Brasil", "USA", "Espanha"],
              correctAnswer: "Inglaterra"
            },
            {
              question: "Quando começou a primeira guerra mundial?",
                choices: ["1914", "1896", "1900", "1945"],
                correctAnswer: "1914"
              },
              {
                question: "Qual é o país mais populoso do mundo?",
                  choices: ["China", "USA", "Índia", "Russia"],
                  correctAnswer: "Índia"
                },
                {
                  question: "Qual é o país menos populoso do mundo?",
                    choices: ["Brasil", "Vaticano", "Portugual", "Irlanda"],
                    correctAnswer: "Vaticano"
                  },
                  {
                    question: "Qual é o maior livro da Biblia?",
                      choices: ["Apocalipse", "Cânticos", "Números", "Salmos"],
                      correctAnswer: "Salmos"
                    },
                    {
                      question: "Quantos dias moisés levou para fazer a arca? ",
                        choices: ["364", "250", "100", "Nenhum"],
                        correctAnswer: "Nenhum"
                      },
                      {
                        question: "Por onde é transmitido a HIV?",
                          choices: ["Pênis", "Vagina", "Anûs", "Todos"],
                          correctAnswer: "Todos"
                        },
                        {
                          question: "Qual foi a maior pandemia do mundo?",
                            choices: ["COVID-19","EBOLA", "GRIPE ESPANHOLA", "PESTE NEGRA", ],
                            correctAnswer: "GRIPE ESPANHOLA"
                          },
                          {
                            question: "Em que país se originou a GRIPE ESPANHOLA",
                              choices: ["Espanha", "Itália", "Inglaterra", "China"],
                              correctAnswer: "Espanha"
                            }
                        
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

const nameInput = document.getElementById("nameInput");
const playerNameInput = document.getElementById("playerName");
const startButton = document.getElementById("startButton");
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const results = document.getElementById("results");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  playerName = playerNameInput.value.trim();
  if (playerName !== "") {
    nameInput.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
  } else {
    alert("Por favor insira seu nome!.");
  }
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  choicesElement.innerHTML = "";
  q.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("btn", "btn-secondary", "mr-2");
    button.onclick = () => chooseAnswer(choice);
    choicesElement.appendChild(button);
  });
}

function chooseAnswer(choice) {
  if (choice === questions[currentQuestion].correctAnswer) {
    score++;
  }
}

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quiz.style.display = "none";
  results.style.display = "block";
  scoreElement.textContent = `${playerName}, Você acertou ${score} de ${questions.length} questões corretas!`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  playerName = "";
  nameInput.style.display = "block";
  quiz.style.display = "none";
  results.style.display = "none";
  playerNameInput.value = "";
}

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);
