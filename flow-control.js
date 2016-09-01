'use strict';

function basicTeenager(age){
  if (13 <= age && age <= 19) {
    return 'You are a teenager!'
  } else if (age > 19 && age < 13) {
    return undefined
  }

}

function teenager(age){
  if (13 <= age && age <= 19) {
    return 'You are a teenager!'
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age){
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  } else if ( age <= 12) {
    return "You are a kid"
  } else if (age >= 20) {
    return "You are a grownup"
  }
}

function ternaryTeenager(age){
  return (13 <= age && age <= 19 ? "You are a teenager" : "You are not a teenager")
}

function switchAge(age){

  switch (13 < age && age < 19) {
  case true:
      return "You are a teenager"
      break;
  default:  // all other cases
      return 'You have an age'
}

}
