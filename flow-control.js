'use strict';

function basicTeenager(age){
    if (age <= 19 && age => 13){
      return "You are a teenager!";
    }
}

function teenager(age){
  if (age <= 19 && age => 13){
    console.log("You are a teenager!");
  }
  else{
    return "You are not a teenager";
  }
}

  //  Define a function ageChecker that takes in an age as a parameter.
  //If the age is between 13-19 it should return "You are a teenager!".
  //If the age is 12 or below, it should return "You are a kid".
  //If the age is above 19, it should return "You are a grownup"

function ageChecker(age){
  if (age <= 19 && age => 13){
    console.log("You are a teenager!");
  }
  else if(age < 13){
    console.log("You are a kid");
  }
  else{
    return "You are a grownup";
  }
}


function ternaryTeenager(age){
  age => 13 && age <= 19 ? return "You are a teenager": "You are not a teenager"
}

function switchAge(age){
  switch (age)
  case age <= 19 && age => 13:
    console.log("You are a teenager");
    break;
  default:
    return "You have an age";
    break;
}
