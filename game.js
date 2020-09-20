const question = document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
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


var MAX_QUESTIONS = 5;
var SUBTRACT_SCORE = 10;



