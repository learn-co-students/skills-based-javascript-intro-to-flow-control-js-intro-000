'use strict';

function basicTeenager(age){
  if (age >=13 && age <= 19 ){
    console.log("You are a teenager!");
  }
}

function teenager(age){
  if (age >=13 && age <= 19 ){
    console.log("You are a teenager!");
  } else if{
    console.log("You are not a teenager");
  } else {
    console.log("The end!");
  }
}

function ageChecker(age){
  if (age >=13 && age <= 19 ){
    console.log("You are a teenager!");
  } else if (age >=12) {
    console.log("You are a kid");
  }else (age < 19){
    console.log("You are a grownup");
  }
}

function ternaryTeenager(age){
  if (age < 13 && age > 19 ) {
    return "You are a teenager"
  }
}

function switchAge(age){
  var mood = "hungry"
  switch(mood) {
    case "happy":
      console.log("Dance to Pharrels Happy");
      break;
    case "sad":
      console.log("You should get a pint of ice cream");
      break;
    case "anxious":
      console.log("Take some deep breaths");
      break;
    case "hungry":
      console.log("You should eat a big chocolate cake");
      break;
    default:
      console.log("That's not a mood we support");
  }
}
