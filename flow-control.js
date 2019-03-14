'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19){
   return 'You are a teenager!'
 }
 }

 function teenager(age){
   if (age >= 13 && age <= 19) {
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager'
  }
}

function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!'
  } else if (age < 13) {
    return 'You are a kid'
  } else {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age){
  var teenager = "You are a teenager"
var notTeenager = "You are not a teenager"
var trueOrFalse = ""
age >= 13 && age <= 19 ?  trueOrFalse = teenager : trueOrFalse = notTeenager;
return trueOrFalse
}

function switchAge(age){
  switch (age) {
    case 13:
      return 'You are a teenager'
      break;
    case 14:
      return 'You are a teenager'
      break;
    case 15:
      return 'You are a teenager'
      break;
    case 16:
      return 'You are a teenager'
      break;
    case 17:
      return 'You are a teenager'
      break;
    case 18:
      return 'You are a teenager'
      break;
    case 19:
      return 'You are a teenager'
      break;
    default: return 'You have an age'
  }
}
