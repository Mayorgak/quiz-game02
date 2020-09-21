const question = document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
  {
    question: "How to write an IF statement in JavaScript?",
    choice1: "if (i == 5) ",
    choice2: 'if i = 5 then", "if i == 5 then',
    choice3: "if i == 5 then",
    choice4: "if i == !5 then",
    answer: 1,
  },
  {
    question: "How does a FOR loop start?",
    choice1: "for (i = 0; i <= 5; i++)",
    choice2: "for (i = 0; i <= 5)",
    choice3: "for (i <= 5; i++)",
    choice4: "for (i <= 5; i+)",
    answer: 1,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    choice1: "<!--This is a comment-->",
    choice2: "//This is a comment  ",
    choice3: "This is a comment",
    choice4: "comment",
    answer: 2,
  },

  {
    question: "How do you declare a JavaScript variable?",
    choice1: "var carName;",
    choice2: "v carName;",
    choice3: "variable carName;",
    choice4: "v carName;",
    answer: 1,
  },
  {
    question: "What is a DOM in JavaScript?",
    choices1: "Data of Mine",
    choice2: "Document of Master",
    choice3: "Data Object Model",
    choice4: "Data Object Modal",
    answer: 3,
  },
];


const MAX_QUESTIONS = 5;
const SUBTRACT_SCORE = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
getNewQuestion();

};



getNewQuestion = () => {

  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS ) {
    return window.location.assign("/end.html");
  }

  questionCounter++;
  questionCounterText.innerText = "question"
  

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

   
    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; 
    console.log(classToApply);


    selectedChoice.parentElement.classList.add(classToApply);

    

         setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();