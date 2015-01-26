//Question Counter and User Score 
var counter = 0,
 score = 0;
// Quiz Data 
var content = [
  {
    "question":"What is the name of Tyrions Sister?",
    "option1":"Arya",
    "option2":"Cercei",
    "option3":"Isabella",
    "answer": "Cercei"
  },
  {
    "question":"What is the name of this dire wolf?",
    "option1":"Snow",
    "option2":"Smoke",
    "option3":"Ghost",
    "answer": "Ghost"
  },
  {
    "question":"This sword goes by what name?",
    "option1":"Rock",
    "option2":"Fire",
    "option3":"Ice",
    "answer": "Ice"
  },

    {
    "question":"What family does he belong to?",
    "option1":"Stark",
    "option2":"Snow",
    "option3":"Red",
    "answer": "Snow"
  },
    {
    "question":"Is this a boy or a girl?",
    "option1":"Boy",
    "option2":"Girl",
    "option3":"Niether",
    "answer": "Girl"
  },
]

//common elements

var $question = $('.question'),
  $options =$('.options'),
  $option1 = $('#option1'),
  $option2 = $('#option2'),
  $option3 = $('#option3'),
  $generate = $('.generate'),
  $result = $('.results'),
  $score = $('.score'),
  $thanks = $('.thanks');

var gotQuiz = {};

//initial game state 
gotQuiz.init = function (){
  var selection = content[counter];
  answer = selection["answer"];
  $question.html(selection["question"]);
  $option1.html(selection["option1"]);
  $option2.html(selection["option2"]);
  $option3.html(selection["option3"]);
  $(".photo").css("background", selection["picture"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}
//function for moving throughout the Quiz
gotQuiz.generate = function(){
  if(counter < content.length){
    var selection = content[counter];
    $question.html(selection["question"]);
    $option1.html(selection["option1"]);
    $option2.html(selection["option2"]);
    $option3.html(selection["option3"]);
    answer = selection["answer"];

    $result.hide();
    $score.hide();
    $question.show();
    $options.show();
  
  }else {
    //no more questions left
    $(".thanks").show();
    }
  
  $generate.hide();
}

//If users choice is right 
$('.choice').click(function(e){
  var chosenAnswer = $(e.target).text();
  $result.show();
  $score.show();
  $question.hide();
  $options.hide();
  if (chosenAnswer == answer){
    $result.html("<span> Your are correct your highness </span>");
    score++;
  } else {
    $result.html("<span> You are wrong my lord </span>");
  }
  counter++;
  $score.html("You are " + score + " for " + counter + ".");
  $generate.show();
});

$(document).ready(function(){
  $('body').fadeIn(800);
  gotQuiz.init();
  $('.bxslider').bxSlider({
    nextSelector: '#generate',
    prevSelector: '#slider-prev',
    nextText: 'Onward',
    prevText: '← Go back'
});
});

$generate.on('click', function(){
  gotQuiz.generate();
});



