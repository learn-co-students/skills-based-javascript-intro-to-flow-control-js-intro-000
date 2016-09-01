'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return undefined;
  }
}

function teenager(age){
  if (13 <= age && age <= 19) {
      return "You are a teenager!"
  } else {
      return "You are not a teenager"
  }
}

function ageChecker(age){
  if (age >= 13 && age <=19) {
      return "You are a teenager!"
  } else if (age <= 12) {
      return "You are a kid"
  } else if (age > 19) {
      return "You are a grownup"
  }
}

function ternaryTeenager(age){
  var isTeenager = (age >= 13 && age <= 19);
  console.log(isTeenager);
  var returnString = isTeenager ? "You are a teenager" : 'You are not a teenager';
  return returnString;
}

function switchAge(age){
  switch(age >= 13 && age <=19) {
    case true:
      return "You are a teenager"
      break;
    default:
      return "You have an age"

  }
}
