// alert('Hey find me to know where to put the javascript');
MIN = 1;
MAX = 3;

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
 var check_guess= function(correct_number, value) {
   (correct_number === value) ? alert('You got it!') : alert('Try Again...');
};

// store guess and run check
var format_guess = function() {
    // issue using global variable?
    return parseInt($("input").val(), 10);
  };

// On button click
$("a").on( "click", function(e) {
  check_guess(correct_number, format_guess());
});
