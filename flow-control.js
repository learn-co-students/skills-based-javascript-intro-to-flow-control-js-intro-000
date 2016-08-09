'use strict';

function basicTeenager(age){
  if (age >= 13 && age <= 19) 
  {
       return "You are a teenager!"
  } 
}

//This method call within a method. see basicTeenager() method.
function teenager(age){
    if (basicTeenager(age)) 
  {
       return "You are a teenager!"
  }
  else
  {
       return "You are not a teenager"
  }
}

//This method call within a method. see basicTeenager() method.
function ageChecker(age){
  if (age > 19)
    {
      return "You are a grownup"
    }
  else if (basicTeenager(age))
  {
     return "You are a teenager!"
  }
  else if (age <= 12) 
  {
       return "You are a kid"
  }
}

//This method call within a method. see basicTeenager() method.
function ternaryTeenager(age){
    return basicTeenager(age) ? "You are a teenager" : "You are not a teenager"
}


function switchAge(age){
  switch(age) { 
    case 13: 
    case 14:
    case 15: 
    case 16: 
    case 17: 
    case 18:
    case 19:
     return "You are a teenager"
    default:
       return "You have an age"
  }
}
