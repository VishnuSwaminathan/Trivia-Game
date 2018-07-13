var trivia = [
  {
    q: '1: What is your name?',
    op1: '1This is option 1',
    op2: '1This is option 2',
    op3: '1This is option 3',
    op4: '1This is option 4'
  },
  {
    q: '2: What is your name?',
    op1: '2This is option 1',
    op2: '2This is option 2',
    op3: '2This is option 3',
    op4: '2This is option 4'
  },
  {
    q: '3: What is your name?',
    op1: '3This is option 1',
    op2: '3This is option 2',
    op3: '3This is option 3',
    op4: '3This is option 4'
  },
  {
    q: '4: What is your name?',
    op1: '4This is option 1',
    op2: '4This is option 2',
    op3: '4This is option 3',
    op4: '4This is option 4'
  }
];

var count = 5;
var intervalId;
var clicked;
function clickedOption(j) {
  var i = j;
  $('#btn').click(function(event) {
    clicked = $(event.target).text();
    console.log('Clicked: ' + clicked);
    if (i === 0) {
      if (clicked === 'option1') {
        return console.log('Correct, selected Option 1');
      } else if (clicked !== 'option1') {
        return console.log('Wrong, selected ' + clicked);
      }
    } else if (i === 1) {
      if (clicked === 'option2') {
        return console.log('Correct, selected Option 2');
      } else if (clicked !== 'option2') {
        return console.log('Wrong, selected ' + clicked);
      }
    } else if (i === 2) {
      if (clicked === 'option3') {
        return console.log('Correct, selected Option 3');
      } else if (clicked !== 'option3') {
        return console.log('Wrong, selected ' + clicked);
      }
    } else if (i === 3) {
      if (clicked === 'option4') {
        return console.log('Correct, selected Option 4');
      } else if (clicked !== 'option4') {
        return console.log('Wrong, selected ' + clicked);
      }
    }
  });
}

function countdown() {
  console.log('started countdown');
  count--;
  $('#counterShow').html('<h2>' + count + '</h2>');
  if (count === 0) {
    console.log('count === 0');
    clearInterval(intervalId);
    count = 5;
    console.log('count is: ' + count);
    alert("Time's Up!");
    return $('#counterShow').html('<h2>' + count + '</h2>');
  }
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(countdown, 1000);
  console.log('countdown set');
  trivia;
  for (i = 0; i < trivia.length; i++) {
    console.log('started for loop');
    console.log(trivia[i].q);
    console.log(trivia[i].op1);
    console.log(trivia[i].op2);
    console.log(trivia[i].op3);
    console.log(trivia[i].op4);
    //-------------------------------------
    // $("#question").html(trivia[i].q)
    // $("#option1").html(trivia[0].op1)
    // $("#option2").html(trivia[i].op2)
    // $("#option3").html(trivia[i].op3)
    // $("#option4").html(trivia[i].op4)
    //--------------------------------------
    window.setTimeout(clickedOption(i), 5000);
  }
}

$('#start').on('click', function() {
  console.log('Clicked start');
  run();
});

console.log('Setup');

// var score = {
//   correct: 0,
//   wrong: 0,
//   reset: function() {
//     score.correct = 0;
//     score.wrong = 0;
//     var questionArray = Object.keys(trivia);
//     console.log(questionArray);
//   }
// };
// var count = 0;
// console.log(Object.values(trivia));
// // for (var key in trivia) {
// //   console.log(key);
// // }
// var showQuestion;
// function nextQuention() {
//   count++;

//   if (count <= 5) {
//     count = 0;
//   }
// }
// function startQuestions() {
//   showQuestion = setInterval(nextQuention, 5000);
// }
// function reset() {
//   clearInterval(showQuestion);
// }

// function decrement() {
//   count++;
//   $('#counterShow').html(count);

//   //  Once number hits zero...
//   if (count === 5) {
//     //  ...run the stop function.

//     //  Alert the user that time is up.
//     alert('Time Up!');
//     nextQuention();
//   }
// }
