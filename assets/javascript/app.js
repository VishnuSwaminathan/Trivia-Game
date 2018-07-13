question1 = [
  '1: What is your name?',
  'This is option 1',
  'This is option 2',
  'This is option 3',
  'This is option 4',
  '0',
  '0'
];
question2 = [
  '2: What is your name?',
  'This is option 1',
  'This is option 2',
  'This is option 3',
  'This is option 4',
  '0',
  '0'
];
question3 = [
  '3: What is your name?',
  'This is option 1',
  'This is option 2',
  'This is option 3',
  'This is option 4',
  '0',
  '0'
];
question4 = [
  '4: What is your name?',
  'This is option 1',
  'This is option 2',
  'This is option 3',
  'This is option 4',
  '0',
  '0'
];
var score = {
  correct: 0,
  wrong: 0,
  reset: function() {
    score.correct = 0;
    score.wrong = 0;
    var questionArray = Object.keys(trivia);
    console.log(questionArray);
  }
};
var count = 0;
console.log(Object.values(trivia));
// for (var key in trivia) {
//   console.log(key);
// }
var showQuestion;
function nextQuention() {
  count++;

  if (count <= 5) {
    count = 0;
  }
}
function startQuestions() {
  showQuestion = setInterval(nextQuention, 5000);
}
function reset() {
  clearInterval(showQuestion);
}

function decrement() {
  count++;
  $('#counterShow').html(count);

  //  Once number hits zero...
  if (count === 5) {
    //  ...run the stop function.

    //  Alert the user that time is up.
    alert('Time Up!');
    nextQuention();
  }
}
