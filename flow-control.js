'use strict';

var teen = "You are a teenager";
var nonTeen = "You are not a teenager";

function isTeen(age){
  if (age >=13 && age <= 19) {return true;}
  else { return false;}
}

function basicTeenager(age){
  if ( isTeen(age) ) {
    return `${teen}!`;
  }
}

function teenager(age){
  if ( isTeen(age) ) {
    return `${teen}!`;
  } else {
    return `${nonTeen}`;
  }

}

function ageChecker(age){
  if ( isTeen(age) ) {
    return `${teen}!`;
  } else if( age < 13 ) { return "You are a kid"; }
    else { return "You are a grownup"; }
}

function ternaryTeenager(age){
  return isTeen(age) ? teen : nonTeen
}

function switchAge(age){
  switch( isTeen(age) ) {
    case true:
      return teen;
    default:
      return "You have an age"
  }
}
