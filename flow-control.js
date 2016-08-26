'use strict';

function basicTeenager(age){
  if(age > 12 && age < 20)
  return "You are a teenager!";
}

function teenager(age){
  if(age > 12 && age < 20) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age){
  if(age > 12 && age < 20) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age){
  let condition = age > 12 && age < 20;
  let res;

  condition ? res = "You are a teenager" : res = "You are not a teenager";

  return res;
}

function switchAge(age){
  switch (age > 12 && age < 20) {
    case true:
      return "You are a teenager";
      break;
    case false:
      return "You have an age";
      break;
    default:
      return "Empty";
  }
}
