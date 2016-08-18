'use strict';

function basicTeenager(age){
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
}

function teenager(age){
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

function ageChecker(age){
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
  else if (age <= 12) {
    return "You are a kid";
  }
  else if (age >= 20) {
    return "You are a grownup";
  }
}

function ternaryTeenager(age){
  var result =
  (age > 12 && age < 20) ? "You are a teenager" : "You are not a teenager";
  return result;
}

function switchAge(age){
  var answer = "You are a teenager";
  switch (age) {
    case 13:
      return answer;
    case 14:
      return answer;
    case 15:
      return answer;
    case 16:
      return answer;
    case 17:
      return answer;
    case 18:
      return answer;
    case 19:
      return answer;
    default:
      return "You have an age";
  }
}
