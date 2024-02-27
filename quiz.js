const questions = [
    {
        question:"What is the capital of France",
        choices: ["A. London","B. paris","c .Rome", "D . Berlin"],
        correctAnswer: "B"
    },
    {
        question:"What is the largest planet of the solar system",
        choices:["A. Mars","B. Jupiter","c .Earth", "D . saturn"],
        correctAnswer: "B"   
    },
    {
        question:"Who wote 'Romeo and juliet'?",
        choices:["A. William Shakespeare","B. Charles Dickens","c .Jane Austen", "D . Mark Twain"],
        correctAnswer: "A"
    }
];


const quizForm =document.getElementById("quizForm");
const feedback =document.getElementById("feedback");

let currentQuestionIndex =0;


//Load initial Question


