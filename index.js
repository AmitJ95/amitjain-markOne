var readLineSync = require('readline-sync');

var score = 0;

function play(question,answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right");
    score = score + 1;
  }else{
    console.log("You are wrong")
     score = score - 1;
  }

  console.log("current score,",score);
  console.log("-----------");
}


var questions = [{
  question: "What is my Job? ",
  answer: "Software Development"
},
{
  question: "What are my interests? ",
  answer: "Action Movies"
},
{
  question: "What is my age? ",
  answer: "26"
},
{
  question: "What is the name of country in which I live? ",
  answer: "India"
},
{
  question: "What is the name of State in which I live? ",
  answer: "Delhi"
},
];

for(var i=0 ; i<questions.length; i++){
 var currentQuestion = questions[i];

 play(currentQuestion.question,currentQuestion.answer);

}