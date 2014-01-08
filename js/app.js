// alert('Hey find me to know where to put the javascript');
MIN = 1;
MAX = 100;

// Generates a random number between 1 and MAX
var rand_number = function getRandomInt(MIN, MAX) {
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};
var correct_number = rand_number(MIN, MAX);

// Tell the user to guess a number
game_message = "Let's play Faizaan's javascript guessing game! You'll have to guess a number between ";

$(document).ready(function(){
    alert(game_message + MIN + " and " + MAX);
  });


// Display message based on whether guess is correct
 function check_guess(correct_number, value) {
  (correct_number === value) ? alert('You got it!') : alert('Try Again...');
}

// store guess and run check
var store_and_check = function() {
    // issue using global variable?
    value = parseInt($("input").val(), 10);
    check_guess(correct_number, value);
  };

// On button click
$("a").on( "click", store_and_check );



