'use strict';

function basicTeenager(age){
  if (age >= 13 || <= 19)
  return "You are a teenager!"
}
basicTeenager(13)

function teenager(age){
  if (age >= 13 || <=19)
  return "You are a teenager!"
} else {
  return ("You are not a teenager!")
}

function ageChecker(age){
  if (age >= 13 || <= 19)
  return "You are a teenager!"
} else if (age <= 12) {
  return ("You are a kid!")
} else {
  return ("You are a grown up!")
}

function ternaryTeenager(age){
 if (age >= 13 || <= 19)
 return "You are a teenager" : "You are not a teenager"
}

function switchAge(age){
  switch(age) {
    case >= 13 || <= 19:
    return "You are a teenager";
    break;
    case <= 12 || > 19:
    return "You are not a teenager";
  }

}
