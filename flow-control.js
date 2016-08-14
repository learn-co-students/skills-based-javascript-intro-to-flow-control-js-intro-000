'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19) {
   return `You are a teenager!`
  }
}

function teenager(age){
  if (age >= 13 && age <= 19) {
    return `You are a teenager!`
  } else {
    return `You are not a teenager`
  }
}

function ageChecker(age){
}

function ternaryTeenager(age){
  (age >=13 && <=19) ? 
  return `You are a teenager!` : return `You are not a teenager`
}

function switchAge(age){
  switch(age) {
  case 15:
  return `You are a teenager`;
  break;
  default:
  return `You have an age`;
 }
}
