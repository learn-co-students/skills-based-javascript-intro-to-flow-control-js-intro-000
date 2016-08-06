'use strict';

function basicTeenager(age){
  if (12 < age && age < 20){
    return "You are a teenager!";
  }
}

function teenager(age){
  return 12 < age && age < 20 ? "You are a teenager!" : "You are not a teenager";
}

function ageChecker(age){
  return age < 13 ? "You are a kid" : age < 20 ? "You are a teenager!" : "You are a grownup";
}

function ternaryTeenager(age){
  return 12 < age && age < 20 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age){
  switch(basicTeenager(age)) {
    case "You are a teenager!":
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
