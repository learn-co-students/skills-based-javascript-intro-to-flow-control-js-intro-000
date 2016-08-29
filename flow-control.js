'use strict';

function basicTeenager(age){
  if (age <= 19 && age >= 13){
    return "You are a teenager!";
  }
}

function teenager(age){
  if (age <= 19 && age >= 13){
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

function ageChecker(age){
  if (age <= 19 && age >= 13){
    return "You are a teenager!";
  }
  else if (age > 19){
    return "You are a grownup";
  }
  else if(age <= 12){
    return "You are a kid";
  }
  }

function ternaryTeenager(age){
  return age <= 19 && age >= 13 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  return "You are a teenager";
  default:
  return "You have an age"
}
}
