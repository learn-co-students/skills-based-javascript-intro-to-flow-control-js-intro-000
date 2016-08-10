'use strict';

function basicTeenager(age){
  if (13<=age && 19>=age) {
  return "You are a teenager!"
} else {
  return undefined
 }
}


function teenager(age){
  if (13<=age && 19>=age) {
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager'
  }

}

function ageChecker(age){
  if (13<=age && 19>=age) {
    return 'You are a teenager!'
  } else if (20<=age) {
    return 'You are a grownup'
  } else {
    return 'You are a kid'
  }

}

function ternaryTeenager(age){
  if (13<=age && 19>=age) {
    return 'You are a teenager'
  } else {
    return 'You are not a teenager'
  }

}

function switchAge(age){
  if (13<=age && 19>=age) {
    return 'You are a teenager'
  } else {
    return 'You have an age'
  }

}
