'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  return undefined
}

function teenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}


function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age){
  var teenager = "You are a teenager"
  var notateenager = "You are not a teenager"
  var condition = (age >= 13 && age <= 19)
  var statement = condition ? teenager : notateenager
  return statement
}

function switchAge(age){
  var condition = (age >= 13 && age <= 19)
  switch (condition) {
    case true:
      return "You are a teenager"
      break;
    default:
      return "You have an age"

  }
}
