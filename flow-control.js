// 'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19){
    var a = "You are a teenager!"
    return a
  } else{
    // var a = "undefined"
    return undefined
  }
}

function teenager(age){
  if (age >= 13 && age <= 19){
    var a = "You are a teenager!"
    return a
  } else{
    var a = "You are not a teenager"
    return a
  }
}

function ageChecker(age){
  if (age >= 13 && age <= 19){
    var a = "You are a teenager!"
    return a
  } else if (age > 20) {
    var a = "You are a grownup"
    return a
  }else if (age >= 12) {
    var a = "You are a kid"
    return a
  }
}

function ternaryTeenager(age){
  if (age >= 13 && age <= 19){
    var a = "You are a teenager"
    return a
  } else{
    var a = "You are not a teenager"
    return a
  }
}

function switchAge(age){
  if (age >= 13 && age <= 19){
    var a = "You are a teenager"
    return a
  } else{
    var a = "You have an age"
    return a
  }
}
