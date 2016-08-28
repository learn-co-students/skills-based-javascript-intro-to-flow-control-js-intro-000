'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  }
}

function teenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else {
    {
      return "You are not a teenager"
    }
  }
}

function ageChecker(age)
{
  if (age <= 12)
  {
    return "You are a kid";
  }
  else if (age >= 13 && age <= 19)
  {
    return "You are a teenager!";
  }
  else
  {
    return "You are a grownup";
  }
}


function ternaryTeenager(age)
  {
    return (age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager");
  }


function switchAge(age){
  var x = age
  switch(true)
  {
    case x >= 13 && x <= 19:
      alert(x);
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
