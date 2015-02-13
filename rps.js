$(document).ready(function(){
// Declare variables at top, but don't assign anything to them
var userChoice, computerChoice;

var compare = function(choice1, choice2){
  if (choice1 == choice2){
    console.log("The result is a tie!");
  }
  else if (choice1 == "rock"){
    if (choice2 == "scissors"){
      console.log("rock wins")
    }
    else {
      console.log("paper wins")
    }
  }
  else if (choice1 == "paper"){
    if (choice2 == "rock"){
      console.log("paper wins")
    }
    else {
      console.log("scissors wins")
    }
  }
  else{
    if (choice2 =="paper"){
      console.log("scissors wins")
    }
    else {
      console.log("rock wins")
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
  $("#computerChoice").html(computerChoice);

  //compare(userChoice, computerChoice);
});
});
