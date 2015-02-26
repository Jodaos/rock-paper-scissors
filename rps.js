$(document).ready(function(){
// Declare variables at top, but don't assign anything to them
var userChoice, computerChoice, result;

var compare = function(choice1, choice2){
  if (choice1 == choice2){
    return "The result is a tie!";
  }
  else if (choice1 == "rock"){
    if (choice2 == "scissors"){
      return "rock";
    }
    else {
      return "paper";
    }
  }
  else if (choice1 == "paper"){
    if (choice2 == "rock"){
      return "paper";
    }
    else {
      return "scissors";
    }
  }
  else{
    if (choice2 =="paper"){
      return "scissors";
    }
    else {
      return "rock";
    }
  }
}

$("#userChoice button").click(function(){
  userChoice = $(this).val();
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  } 

  $("#userImg").html("<img src='images/" + userChoice + ".jpg'>");
  $("#computerImg").html("<img src='images/" + computerChoice + ".jpg'>");

  result = compare(userChoice, computerChoice);
  if(result != "The result is a tie!"){
    result = result.toUpperCase() + " WINS!";
  }

  $("#result").html(result);
});
});
